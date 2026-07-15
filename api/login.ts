/**
 * POST /api/login
 * Body: { email: "you@example.com" }
 *
 * Real Circle-backed login, same pattern NAN uses: given an email, find an
 * existing Developer-Controlled Wallet tied to it (via refId), or create
 * one. No password, no MetaMask — Circle manages the keys, the email is
 * just how ARIKE looks up which wallet belongs to you.
 *
 * Requires CIRCLE_API_KEY, CIRCLE_ENTITY_SECRET, and ARIKE_WALLET_SET_ID
 * (the wallet set from `npm run create:wallet`) as Vercel env vars.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";
import crypto from "node:crypto";

function refIdForEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  return "arike-" + crypto.createHash("sha256").update(normalized).digest("hex").slice(0, 20);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { email } = req.body ?? {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Enter a valid email address" });
    return;
  }

  const { CIRCLE_API_KEY, CIRCLE_ENTITY_SECRET, ARIKE_WALLET_SET_ID } = process.env;
  if (!CIRCLE_API_KEY || !CIRCLE_ENTITY_SECRET || !ARIKE_WALLET_SET_ID) {
    res.status(503).json({
      ok: false,
      error: "not_configured",
      message: "Set ARIKE_WALLET_SET_ID in Vercel (from `npm run create:wallet`'s output) to enable Circle login.",
    });
    return;
  }

  try {
    const client = initiateDeveloperControlledWalletsClient({
      apiKey: CIRCLE_API_KEY,
      entitySecret: CIRCLE_ENTITY_SECRET,
    });

    const refId = refIdForEmail(email);

    const existing = await client.listWallets({ refId, walletSetId: ARIKE_WALLET_SET_ID });
    let wallet = existing.data?.wallets?.[0];
    let isNew = false;

    if (!wallet) {
      const created = await client.createWallets({
        walletSetId: ARIKE_WALLET_SET_ID,
        blockchains: ["ARC-TESTNET"],
        accountType: "EOA",
        count: 1,
        metadata: [{ name: email, refId }],
      });
      wallet = created.data?.wallets?.[0];
      isNew = true;
    }

    if (!wallet) {
      throw new Error("Circle did not return a wallet — try again");
    }

    res.status(200).json({
      ok: true,
      address: wallet.address,
      walletId: wallet.id,
      isNew,
    });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
