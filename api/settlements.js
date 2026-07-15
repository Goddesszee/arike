/**
 * ARIKE Console API — Vercel serverless function
 * --------------------------------------------------
 * GET /api/settlements
 *
 * Reads settlements from the deployed ArikeLedger contract on Arc Testnet
 * via a read-only viem client. Falls back to mock data if
 * ARIKE_LEDGER_ADDRESS isn't set in the Vercel project's environment
 * variables yet, so the public demo URL works before contracts are deployed.
 *
 * ABI is inlined here (rather than imported from build/) since Vercel's
 * serverless runtime doesn't carry over the local solc build artifacts —
 * this keeps the function self-contained and deployment-safe.
 */
import { createPublicClient, http, defineChain } from "viem";

const arcTestnet = defineChain({
  id: 5042002,
  name: "Arc Testnet",
  nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 18 },
  rpcUrls: { default: { http: ["https://rpc.testnet.arc.network"] } },
});

const LEDGER_ABI = [
  {
    inputs: [],
    name: "settlementCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "settlements",
    outputs: [
      { internalType: "address", name: "consumer", type: "address" },
      { internalType: "address", name: "provider", type: "address" },
      { internalType: "uint256", name: "serviceId", type: "uint256" },
      { internalType: "uint256", name: "amountMicroUsdc", type: "uint256" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const MOCK_SETTLEMENTS = [
  { consumer: "0xC0nsumer...aA1", provider: "0xArikePr0vider...bB2", serviceId: "0", amountUsdc: "0.002000", timestamp: new Date(Date.now() - 90_000).toISOString() },
  { consumer: "0xC0nsumer...aA1", provider: "0xFxOracle...cC3", serviceId: "1", amountUsdc: "0.001000", timestamp: new Date(Date.now() - 45_000).toISOString() },
  { consumer: "0xC0nsumer...aA1", provider: "0xWeatherRisk...dD4", serviceId: "2", amountUsdc: "0.003000", timestamp: new Date(Date.now() - 5_000).toISOString() },
];

async function fetchLiveSettlements(ledgerAddress) {
  const client = createPublicClient({ chain: arcTestnet, transport: http() });

  const count = await client.readContract({
    address: ledgerAddress,
    abi: LEDGER_ABI,
    functionName: "settlementCount",
  });

  const rows = [];
  const start = count > 20n ? count - 20n : 0n;

  for (let i = start; i < count; i++) {
    const s = await client.readContract({
      address: ledgerAddress,
      abi: LEDGER_ABI,
      functionName: "settlements",
      args: [i],
    });

    rows.push({
      consumer: s[0],
      provider: s[1],
      serviceId: s[2].toString(),
      amountUsdc: (Number(s[3]) / 1_000_000).toFixed(6),
      timestamp: new Date(Number(s[4]) * 1000).toISOString(),
    });
  }

  return rows.reverse();
}

export default async function handler(req, res) {
  const ledgerAddress = process.env.ARIKE_LEDGER_ADDRESS;

  try {
    if (!ledgerAddress) {
      res.status(200).json({ live: false, settlements: MOCK_SETTLEMENTS });
      return;
    }
    const settlements = await fetchLiveSettlements(ledgerAddress);
    res.status(200).json({ live: true, settlements });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
