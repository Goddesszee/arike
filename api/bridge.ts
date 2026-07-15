/**
 * POST /api/bridge
 * Body: { address: "0x...", fromChain: "Base_Sepolia"|"Ethereum_Sepolia"|"Avalanche_Fuji", amountUsdc: "5.00" }
 *
 * Defaults to SLOW transfer speed (see src/lib/bridge.ts for why — FAST
 * reverts on small Arc Testnet amounts due to the ~1.4 USDC fast-transfer fee).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { bridgeToArc } from "../src/lib/bridge.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { address, fromChain, amountUsdc } = req.body ?? {};
  if (!address || !fromChain || !amountUsdc) {
    res.status(400).json({ error: "Missing address, fromChain, or amountUsdc" });
    return;
  }

  try {
    const result = await bridgeToArc({ address, fromChain, amountUsdc });
    res.status(200).json({ ok: true, result });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
