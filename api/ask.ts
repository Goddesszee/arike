/**
 * POST /api/ask
 * Body: { query: "cheapest TV in Nigeria and who's the best vendor" }
 *
 * Open-ended version of ARIKE's search-and-recommend pattern. Given any
 * question, the agent decides what's being asked for and returns a ranked
 * list of vendor options with a recommendation — the same "decide, search,
 * evaluate" logic as the consumer agent's trade-planning flow, just not
 * scoped to shipping/logistics.
 *
 * Honest limitation: there's no real vendor marketplace to search yet, so
 * results are Claude-generated, plausible example vendors for demo
 * purposes — clearly labeled `demo: true` so the frontend never presents
 * them as real listings. Each vendor gets a real, valid Arc Testnet address
 * format so the actual "Pay" action (via /api/send) is a genuine onchain
 * transaction, even though nobody controls that specific address.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Anthropic from "@anthropic-ai/sdk";
import crypto from "node:crypto";

const anthropic = new Anthropic();

function randomDemoAddress(): string {
  return "0x" + crypto.randomBytes(20).toString("hex");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { query } = req.body ?? {};
  if (!query || typeof query !== "string" || query.trim().length < 3) {
    res.status(400).json({ error: "Enter a question" });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(503).json({ error: "not_configured", message: "Set ANTHROPIC_API_KEY in Vercel." });
    return;
  }

  try {
    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 700,
      messages: [
        {
          role: "user",
          content: `A shopping agent got this request: "${query}"

Generate 3-4 plausible, realistic-sounding example vendors that could answer
this. For each: a name, a price in USD (just the number), a one-line
description, and a 1-5 rating. Then pick the best one and give a one-sentence
reason why.

Respond with ONLY valid JSON, no other text, in exactly this shape:
{
  "vendors": [{"name": "...", "priceUsd": 000, "description": "...", "rating": 0}],
  "recommendedIndex": 0,
  "reason": "..."
}`,
        },
      ],
    });

    const text = msg.content.find((b) => b.type === "text")?.text ?? "{}";
    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    const vendors = (parsed.vendors ?? []).map((v: any) => ({
      ...v,
      address: randomDemoAddress(),
      demo: true,
    }));

    res.status(200).json({
      ok: true,
      query,
      vendors,
      recommendedIndex: parsed.recommendedIndex ?? 0,
      reason: parsed.reason ?? "",
      demo: true,
    });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
