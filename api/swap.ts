/**
 * POST /api/swap
 * Body: { address: "0x...", tokenIn: "USDC"|"EURC", tokenOut: "USDC"|"EURC", amountIn: "1.00" }
 *
 * Estimates first (per Circle's guidance on thin testnet liquidity), then
 * executes. Returns a clear JSON error if CIRCLE_KIT_KEY or wallet funding
 * isn't in place yet — this endpoint is meant to surface real state, not
 * hide it.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { estimateSwapOnArc, swapOnArc } from "../src/lib/swap.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { address, tokenIn, tokenOut, amountIn } = req.body ?? {};
  if (!address || !tokenIn || !tokenOut || !amountIn) {
    res.status(400).json({ error: "Missing address, tokenIn, tokenOut, or amountIn" });
    return;
  }

  try {
    const estimate = await estimateSwapOnArc({ address, tokenIn, tokenOut, amountIn });
    const result = await swapOnArc({ address, tokenIn, tokenOut, amountIn });
    res.status(200).json({ ok: true, estimate, result });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
