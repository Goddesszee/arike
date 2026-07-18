/**
 * POST /api/transfer
 * Body: { type: "send", fromAddress, toAddress, amount, token? }
 *    or { type: "bridge", address, fromChain, amountUsdc }
 *
 * Merged Send + Bridge into one endpoint to stay under Vercel's Hobby-plan
 * serverless function limit. Bridge defaults to SLOW transfer speed (see
 * src/lib/bridge.ts for why — FAST reverts on small Arc Testnet amounts due
 * to the ~1.4 USDC fast-transfer fee).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendOnArc } from "../src/lib/send.js";
import { bridgeToArc } from "../src/lib/bridge.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { type } = req.body ?? {};

  if (type === "send") {
    const { fromAddress, toAddress, amount, token } = req.body;
    if (!fromAddress || !toAddress || !amount) {
      res.status(400).json({ error: "Missing fromAddress, toAddress, or amount" });
      return;
    }
    try {
      const result = await sendOnArc({ fromAddress, toAddress, amount, token });
      res.status(200).json({ ok: true, result });
    } catch (err: any) {
      res.status(500).json({ ok: false, error: err.message });
    }
    return;
  }

  if (type === "bridge") {
    const { address, fromChain, amountUsdc } = req.body;
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
    return;
  }

  res.status(400).json({ error: 'Missing or invalid "type" — must be "send" or "bridge"' });
}
