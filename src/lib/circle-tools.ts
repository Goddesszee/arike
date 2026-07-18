/**
 * ARIKE Circle Tools
 * -------------------
 * Thin wrapper around the real Circle CLI (`@circle-fin/cli`), which is the
 * documented interface for Agent Wallets + Agent Nanopayments:
 *   https://developers.circle.com/agent-stack
 *
 * Every method here shells out to the real `circle` command. Set MOCK=true
 * (or pass --mock) to fake responses while you build UI/orchestration logic
 * before your Circle account + testnet wallet are fully wired up.
 *
 * Real commands used (from Circle's docs, verified July 2026):
 *   circle wallet login <email> [--testnet]
 *   circle wallet list --type agent --chain <CHAIN>
 *   circle wallet fund --address <addr> --chain <CHAIN> [--amount N --method crypto|fiat]
 *   circle wallet balance --address <addr> --chain <CHAIN>
 *   circle gateway deposit --amount N --address <addr> --chain <CHAIN> --method direct
 *   circle gateway balance --address <addr> --chain <CHAIN>
 *   circle services search "<query>"
 *   circle services inspect <url>
 *   circle services pay <url> --address <addr> --chain <CHAIN> --max-amount N
 */

import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface CircleService {
  url: string;
  name?: string;
  description?: string;
  priceUsdc?: number;
  providerAddress?: string;
}

export interface PayResult {
  url: string;
  amountPaidUsdc: number;
  responseBody: string;
}

const MOCK = process.env.MOCK === "true" || process.argv.includes("--mock");

async function runCircle(args: string[]): Promise<string> {
  try {
    const { stdout } = await execFileAsync("circle", args, { timeout: 30_000 });
    return stdout.trim();
  } catch (err: any) {
    throw new Error(
      `circle ${args.join(" ")} failed: ${err.stderr || err.message}\n` +
        `Make sure the Circle CLI is installed (npm install -g @circle-fin/cli) ` +
        `and you've run "circle wallet login" first.`
    );
  }
}

export async function getAgentWalletAddress(chain = "BASE"): Promise<string> {
  if (MOCK) return "0xMOCKAgentWalletAddress0000000000000000";
  const out = await runCircle(["wallet", "list", "--type", "agent", "--chain", chain]);
  // Circle CLI prints a table; grab the first 0x-prefixed token.
  const match = out.match(/0x[a-fA-F0-9]{40}/);
  if (!match) throw new Error(`Could not parse wallet address from CLI output:\n${out}`);
  return match[0];
}

export async function getGatewayBalance(address: string, chain = "BASE"): Promise<string> {
  if (MOCK) return "4.87 USDC (mock)";
  return runCircle(["gateway", "balance", "--address", address, "--chain", chain]);
}

export async function searchServices(query: string): Promise<CircleService[]> {
  if (MOCK) {
    return [
      {
        url: "https://api.example.com/port-congestion",
        name: "Port Congestion Index",
        priceUsdc: 0.002,
        providerAddress: process.env.ARIKE_PROVIDER_WALLET || "0xArikeProviderPortCongestion0001",
      },
      {
        url: "https://api.example.com/fx-rate",
        name: "FX Rate Oracle",
        priceUsdc: 0.001,
        providerAddress: process.env.ARIKE_PROVIDER_WALLET || "0xArikeProviderFxRate0000000002",
      },
      {
        url: "https://api.example.com/weather-risk",
        name: "Weather Risk Feed",
        priceUsdc: 0.003,
        providerAddress: process.env.ARIKE_PROVIDER_WALLET || "0xArikeProviderWeatherRisk00003",
      },
      {
        url: "https://api.example.com/flights",
        name: "Flight Price Feed",
        priceUsdc: 0.01,
        providerAddress: "0xThirdPartyFlightProvider00009",
      }, // third-party example, not ARIKE's own
    ].filter((s) => s.name!.toLowerCase().includes(query.toLowerCase()) || query === "*");
  }
  const out = await runCircle(["services", "search", query]);
  return parseServiceList(out);
}

export async function inspectService(url: string): Promise<string> {
  if (MOCK) return `Mock payment requirements for ${url}: x402, max 0.01 USDC, chain BASE`;
  return runCircle(["services", "inspect", url]);
}

export async function payForService(
  url: string,
  address: string,
  chain = "BASE",
  maxAmountUsdc = 0.05
): Promise<PayResult> {
  if (MOCK) {
    return {
      url,
      amountPaidUsdc: Math.min(0.01, maxAmountUsdc),
      responseBody: JSON.stringify({ mock: true, source: url, data: "sample payload" }),
    };
  }
  const out = await runCircle([
    "services",
    "pay",
    url,
    "--address",
    address,
    "--chain",
    chain,
    "--max-amount",
    String(maxAmountUsdc),
  ]);
  return { url, amountPaidUsdc: maxAmountUsdc, responseBody: out };
}

function parseServiceList(cliOutput: string): CircleService[] {
  // Circle CLI output format may evolve — this defensively extracts URLs
  // and treats surrounding text as the name/description.
  const lines = cliOutput.split("\n").filter(Boolean);
  const services: CircleService[] = [];
  for (const line of lines) {
    const urlMatch = line.match(/https?:\/\/\S+/);
    if (urlMatch) {
      services.push({ url: urlMatch[0], description: line.trim() });
    }
  }
  return services;
}

export const isMock = MOCK;

// ── Reputation & Ledger (the "trust layer") ──
// Reads/writes ArikeLedger.sol directly — this is what turns "pick the top
// search result" into "pick the provider with a real onchain track record."

const LEDGER_ABI = [
  {
    inputs: [{ internalType: "address", name: "provider", type: "address" }],
    name: "totalEarnedBy",
    outputs: [{ internalType: "uint256", name: "total", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "provider", type: "address" },
      { internalType: "uint256", name: "serviceId", type: "uint256" },
      { internalType: "uint256", name: "amountMicroUsdc", type: "uint256" },
    ],
    name: "recordSettlement",
    outputs: [{ internalType: "uint256", name: "settlementId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export interface ProviderReputation {
  providerAddress: string;
  totalEarnedUsdc: number;
  hasHistory: boolean;
}

/**
 * Reads a provider's onchain track record from ArikeLedger — real, read-only,
 * needs no wallet or credentials, just the RPC. Returns hasHistory:false
 * (not an error) for a provider with zero settlements, e.g. someone brand new.
 */
export async function checkProviderReputation(providerAddress: string): Promise<ProviderReputation> {
  if (MOCK) {
    // Deterministic-ish mock so a demo run looks plausible without a live chain.
    const seed = providerAddress.split("").reduce((s, c) => s + c.charCodeAt(0), 0);
    const totalEarnedUsdc = Number(((seed % 50) / 10).toFixed(4));
    return { providerAddress, totalEarnedUsdc, hasHistory: totalEarnedUsdc > 0 };
  }

  const ledgerAddress = process.env.ARIKE_LEDGER_ADDRESS;
  if (!ledgerAddress) {
    // Not configured yet — fail open rather than block the whole flow.
    return { providerAddress, totalEarnedUsdc: 0, hasHistory: false };
  }

  const { createPublicClient, http, defineChain } = await import("viem");
  const arcTestnet = defineChain({
    id: 5042002,
    name: "Arc Testnet",
    nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 18 },
    rpcUrls: { default: { http: ["https://rpc.testnet.arc.network"] } },
  });
  const client = createPublicClient({ chain: arcTestnet, transport: http() });

  const totalMicroUsdc = (await client.readContract({
    address: ledgerAddress as `0x${string}`,
    abi: LEDGER_ABI,
    functionName: "totalEarnedBy",
    args: [providerAddress as `0x${string}`],
  })) as bigint;

  const totalEarnedUsdc = Number(totalMicroUsdc) / 1_000_000;
  return { providerAddress, totalEarnedUsdc, hasHistory: totalEarnedUsdc > 0 };
}

/**
 * Records a real settlement onchain after a Nanopayment clears, via a
 * dedicated Circle-managed wallet (ARIKE_DEPLOYER_WALLET_ID) that pays its
 * own tiny gas to notarize the record. This is what makes every real
 * payment show up in ArikeLedger — not just the console's demo "Trigger"
 * button.
 *
 * Honest simplification: the CLI's "agent wallet" (used for the actual
 * Nanopayment) and this SDK-managed "recording" wallet are two different
 * Circle wallet systems, so the ledger's `consumer` field reflects the
 * recording wallet, not necessarily the exact paying address. Fine for
 * demonstrating the pattern; a production version would align them.
 *
 * No-ops cleanly (doesn't throw) if not configured, so a missing ledger
 * address never blocks the actual payment flow — recording is a bonus on
 * top of the real transaction, not a dependency of it.
 */
export async function recordSettlementOnLedger(params: {
  providerAddress: string;
  serviceId: number;
  amountMicroUsdc: number;
}): Promise<{ recorded: boolean; reason?: string }> {
  if (MOCK) {
    console.log(`  [ARIKE] (mock) would record settlement: ${params.providerAddress} earned ${params.amountMicroUsdc} micro-USDC`);
    return { recorded: false, reason: "mock mode" };
  }

  const ledgerAddress = process.env.ARIKE_LEDGER_ADDRESS;
  const walletId = process.env.ARIKE_DEPLOYER_WALLET_ID;
  if (!ledgerAddress) return { recorded: false, reason: "ARIKE_LEDGER_ADDRESS not set" };
  if (!walletId) return { recorded: false, reason: "ARIKE_DEPLOYER_WALLET_ID not set" };
  if (!process.env.CIRCLE_API_KEY || !process.env.CIRCLE_ENTITY_SECRET) {
    return { recorded: false, reason: "CIRCLE_API_KEY/CIRCLE_ENTITY_SECRET not set" };
  }

  try {
    const { initiateDeveloperControlledWalletsClient } = await import(
      "@circle-fin/developer-controlled-wallets"
    );
    const crypto = await import("node:crypto");

    const client = initiateDeveloperControlledWalletsClient({
      apiKey: process.env.CIRCLE_API_KEY,
      entitySecret: process.env.CIRCLE_ENTITY_SECRET,
    });

    await client.createContractExecutionTransaction({
      walletId,
      contractAddress: ledgerAddress,
      abiFunctionSignature: "recordSettlement(address,uint256,uint256)",
      abiParameters: [params.providerAddress, params.serviceId, params.amountMicroUsdc],
      fee: { type: "level", config: { feeLevel: "LOW" } },
      idempotencyKey: crypto.randomUUID(),
    });

    return { recorded: true };
  } catch (err: any) {
    return { recorded: false, reason: err.message };
  }
}
