/**
 * POST /api/quote
 * Body: { address, tokenIn, tokenOut, amountIn }
 *
 * Read-only estimate — no transaction submitted. Used for the live rate
 * ticker under the Swap widget's amount fields, updated as the user types.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { estimateSwapOnArc } from "../src/lib/swap.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { address, tokenIn, tokenOut, amountIn } = req.body ?? {};
  if (!address || !tokenIn || !tokenOut || !amountIn || parseFloat(amountIn) <= 0) {
    res.status(400).json({ ok: false, error: "Missing or invalid address/tokenIn/tokenOut/amountIn" });
    return;
  }

  try {
    const estimate = await estimateSwapOnArc({ address, tokenIn, tokenOut, amountIn });
    res.status(200).json({ ok: true, estimate });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
