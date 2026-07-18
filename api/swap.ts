/**
 * POST /api/swap
 * Body: { address, tokenIn, tokenOut, amountIn, estimateOnly?: boolean }
 *
 * Estimates first (per Circle's guidance on thin testnet liquidity), then
 * executes — unless estimateOnly is true, in which case it stops after the
 * estimate (this mode absorbed the old standalone /api/quote endpoint, to
 * stay under Vercel's Hobby-plan serverless function limit).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { estimateSwapOnArc, swapOnArc } from "../src/lib/swap.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { address, tokenIn, tokenOut, amountIn, estimateOnly } = req.body ?? {};
  if (!address || !tokenIn || !tokenOut || !amountIn) {
    res.status(400).json({ error: "Missing address, tokenIn, tokenOut, or amountIn" });
    return;
  }

  try {
    const estimate = await estimateSwapOnArc({ address, tokenIn, tokenOut, amountIn });
    if (estimateOnly) {
      res.status(200).json({ ok: true, estimate });
      return;
    }
    const result = await swapOnArc({ address, tokenIn, tokenOut, amountIn });
    res.status(200).json({ ok: true, estimate, result });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
