/**
 * POST /api/send
 * Body: { fromAddress: "0x...", toAddress: "0x...", amount: "1.00", token?: "USDC"|"EURC" }
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendOnArc } from "../src/lib/send.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { fromAddress, toAddress, amount, token } = req.body ?? {};
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
}
