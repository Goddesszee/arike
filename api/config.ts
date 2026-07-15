/**
 * GET /api/config
 * Exposes the Circle App ID to the browser — App IDs are meant to be
 * public client-side (Circle's own quickstart uses a NEXT_PUBLIC_ prefix
 * for exactly this reason). Never expose CIRCLE_API_KEY or
 * CIRCLE_ENTITY_SECRET here.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    circleAppId: process.env.ARIKE_CIRCLE_APP_ID || null,
  });
}
