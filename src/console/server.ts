/**
 * ARIKE Console — backend
 * --------------------------
 * Reads settlements directly from the deployed ArikeLedger contract on Arc
 * Testnet via a read-only viem client (no wallet/signing needed — this is
 * just observing onchain events) and serves them to the dashboard.
 *
 * Falls back to mock data if ARIKE_LEDGER_ADDRESS isn't set yet, so you can
 * build/demo the UI before contracts are deployed.
 */
import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createPublicClient, http, defineChain } from "viem";
import ledgerBuild from "../../build/ArikeLedger.json" with { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.CONSOLE_PORT || 4022;

const arcTestnet = defineChain({
  id: 5042002,
  name: "Arc Testnet",
  nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 18 },
  rpcUrls: { default: { http: ["https://rpc.testnet.arc.network"] } },
});

const LEDGER_ADDRESS = process.env.ARIKE_LEDGER_ADDRESS as `0x${string}` | undefined;

const client = LEDGER_ADDRESS
  ? createPublicClient({ chain: arcTestnet, transport: http() })
  : null;

interface SettlementRow {
  consumer: string;
  provider: string;
  serviceId: string;
  amountUsdc: string;
  timestamp: string;
}

const MOCK_SETTLEMENTS: SettlementRow[] = [
  { consumer: "0xC0nsumer...aA1", provider: "0xArikePr0vider...bB2", serviceId: "0", amountUsdc: "0.002000", timestamp: new Date(Date.now() - 90_000).toISOString() },
  { consumer: "0xC0nsumer...aA1", provider: "0xFxOracle...cC3", serviceId: "1", amountUsdc: "0.001000", timestamp: new Date(Date.now() - 45_000).toISOString() },
  { consumer: "0xC0nsumer...aA1", provider: "0xWeatherRisk...dD4", serviceId: "2", amountUsdc: "0.003000", timestamp: new Date(Date.now() - 5_000).toISOString() },
];

async function fetchLiveSettlements(): Promise<SettlementRow[]> {
  if (!client || !LEDGER_ADDRESS) return MOCK_SETTLEMENTS;

  const count = (await client.readContract({
    address: LEDGER_ADDRESS,
    abi: ledgerBuild.abi,
    functionName: "settlementCount",
  })) as bigint;

  const rows: SettlementRow[] = [];
  const start = count > 20n ? count - 20n : 0n; // last 20 settlements

  for (let i = start; i < count; i++) {
    const s = (await client.readContract({
      address: LEDGER_ADDRESS,
      abi: ledgerBuild.abi,
      functionName: "settlements",
      args: [i],
    })) as [string, string, bigint, bigint, bigint];

    rows.push({
      consumer: s[0],
      provider: s[1],
      serviceId: s[2].toString(),
      amountUsdc: (Number(s[3]) / 1_000_000).toFixed(6),
      timestamp: new Date(Number(s[4]) * 1000).toISOString(),
    });
  }

  return rows.reverse(); // newest first
}

app.get("/api/settlements", async (_req, res) => {
  try {
    const settlements = await fetchLiveSettlements();
    res.json({ live: Boolean(client), settlements });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`ARIKE Console running at http://localhost:${PORT}`);
  console.log(client ? "Reading live settlements from Arc Testnet." : "ARIKE_LEDGER_ADDRESS not set — serving mock data.");
});
