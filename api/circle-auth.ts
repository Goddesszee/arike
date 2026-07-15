/**
 * POST /api/circle-auth
 * Body: { action: "requestEmailOtp"|"initializeUser"|"listWallets", ...params }
 *
 * Mirrors Circle's own quickstart route exactly (Create User Wallets with
 * Email OTP), adapted to Vercel serverless. Raw REST calls to Circle's API —
 * no SDK needed server-side for this flow, matching Circle's own example.
 *
 * Docs: https://developers.circle.com/wallets/user-controlled/create-user-wallets-with-email
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "node:crypto";

const CIRCLE_BASE_URL = "https://api.circle.com";
const CIRCLE_API_KEY = process.env.CIRCLE_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }
  if (!CIRCLE_API_KEY) {
    res.status(503).json({ error: "not_configured", message: "Set CIRCLE_API_KEY in Vercel." });
    return;
  }

  const { action, ...params } = req.body ?? {};
  if (!action) {
    res.status(400).json({ error: "Missing action" });
    return;
  }

  try {
    switch (action) {
      case "requestEmailOtp": {
        const { deviceId, email } = params;
        if (!deviceId || !email) {
          res.status(400).json({ error: "Missing deviceId or email" });
          return;
        }
        const response = await fetch(`${CIRCLE_BASE_URL}/v1/w3s/users/email/token`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${CIRCLE_API_KEY}` },
          body: JSON.stringify({ idempotencyKey: crypto.randomUUID(), deviceId, email }),
        });
        const data = await response.json();
        if (!response.ok) {
          res.status(response.status).json(data);
          return;
        }
        // { deviceToken, deviceEncryptionKey, otpToken }
        res.status(200).json(data.data);
        return;
      }

      case "initializeUser": {
        const { userToken } = params;
        if (!userToken) {
          res.status(400).json({ error: "Missing userToken" });
          return;
        }
        const response = await fetch(`${CIRCLE_BASE_URL}/v1/w3s/user/initialize`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CIRCLE_API_KEY}`,
            "X-User-Token": userToken,
          },
          body: JSON.stringify({
            idempotencyKey: crypto.randomUUID(),
            accountType: "SCA",
            blockchains: ["ARC-TESTNET"],
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          // e.g. 155106 = user already initialized — frontend handles this by listing wallets instead
          res.status(response.status).json(data);
          return;
        }
        // { challengeId }
        res.status(200).json(data.data);
        return;
      }

      case "listWallets": {
        const { userToken } = params;
        if (!userToken) {
          res.status(400).json({ error: "Missing userToken" });
          return;
        }
        const response = await fetch(`${CIRCLE_BASE_URL}/v1/w3s/wallets`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${CIRCLE_API_KEY}`,
            "X-User-Token": userToken,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          res.status(response.status).json(data);
          return;
        }
        // { wallets: [...] }
        res.status(200).json(data.data);
        return;
      }

      default:
        res.status(400).json({ error: `Unknown action: ${action}` });
        return;
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
