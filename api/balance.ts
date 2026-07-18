/**
 * GET /api/balance
 * Read-only — checks ARIKE's unified USDC balance across chains. (Circle's
 * Unified Balance product only supports USDC at the protocol level.)
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUnifiedBalance } from "../src/lib/unifiedBalance.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const result = await getUnifiedBalance();
    res.status(200).json({ ok: true, result });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
