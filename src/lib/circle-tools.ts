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
      { url: "https://api.example.com/weather", name: "Weather Oracle", priceUsdc: 0.002 },
      { url: "https://api.example.com/flights", name: "Flight Price Feed", priceUsdc: 0.01 },
      { url: "https://api.example.com/fx", name: "FX Rate Oracle", priceUsdc: 0.001 },
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
