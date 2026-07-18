/**
 * POST /api/chat
 * Body: { message: "...", history?: [{role, content}] }
 *
 * The backend for the Arike AI chat panel. Claude decides in one call
 * whether a message is a plain question (answers directly) or a
 * find/buy/compare request (returns a ranked vendor list, same pattern as
 * /api/ask). Kept as a single endpoint so the frontend doesn't need to
 * pre-classify intent itself.
 *
 * Same honest limitation as /api/ask: there's no real vendor marketplace
 * plugged in yet, so vendor results are Claude-generated, plausible
 * examples for demo purposes — always returned with demo: true.
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

  const { message, history } = req.body ?? {};
  if (!message || typeof message !== "string" || message.trim().length < 1) {
    res.status(400).json({ error: "Missing message" });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(503).json({ error: "not_configured", message: "Set ANTHROPIC_API_KEY in Vercel." });
    return;
  }

  try {
    const historyText = Array.isArray(history)
      ? history.map((h: any) => `${h.role}: ${h.content}`).join("\n")
      : "";

    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 800,
      messages: [
        {
          role: "user",
          content: `You are Arike AI, the chat interface for an autonomous agent that can search for and pay for things using a crypto wallet, and also just answer normal questions.

${historyText ? `Conversation so far:\n${historyText}\n\n` : ""}New message: "${message}"

Decide: is this a request to find/buy/compare a specific product or service (respond with a vendor_search), or a general question/statement (respond with an answer)?

Respond with ONLY valid JSON, no other text, in exactly one of these two shapes:

For a shopping/vendor request:
{"type": "vendor_search", "vendors": [{"name": "...", "priceUsd": 000, "description": "...", "rating": 0}], "recommendedIndex": 0, "reason": "one sentence why", "reply": "one short sentence introducing the results"}

For anything else:
{"type": "answer", "reply": "your answer, conversational, 1-4 sentences"}`,
        },
      ],
    });

    const text = msg.content.find((b) => b.type === "text")?.text ?? "{}";
    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    if (parsed.type === "vendor_search") {
      const vendors = (parsed.vendors ?? []).map((v: any) => ({
        ...v,
        address: randomDemoAddress(),
        demo: true,
      }));
      res.status(200).json({
        ok: true,
        type: "vendor_search",
        reply: parsed.reply ?? "",
        vendors,
        recommendedIndex: parsed.recommendedIndex ?? 0,
        reason: parsed.reason ?? "",
        demo: true,
      });
      return;
    }

    res.status(200).json({ ok: true, type: "answer", reply: parsed.reply ?? text });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
