/**
 * ARIKE Console API — trigger a real settlement
 * -------------------------------------------------
 * POST /api/simulate
 *
 * This is the real thing, not a mock: it calls recordSettlement() on the
 * deployed ArikeLedger contract using Circle's Developer-Controlled Wallets
 * SDK, signed and paid for (in USDC, Arc's native gas) by a wallet you
 * control. Any visitor clicking the button on the dashboard triggers an
 * actual transaction on Arc Testnet — safe to expose publicly because this
 * is testnet USDC, worth nothing.
 *
 * Requires these Vercel project environment variables:
 *   CIRCLE_API_KEY
 *   CIRCLE_ENTITY_SECRET
 *   ARIKE_DEMO_WALLET_ID       - a developer-controlled wallet, funded with
 *                                 a small amount of testnet USDC. Use a
 *                                 DEDICATED wallet for this, separate from
 *                                 your main deployer wallet — it's the one
 *                                 that pays gas for every public click.
 *                                 Refill anytime from faucet.circle.com.
 *   ARIKE_LEDGER_ADDRESS       - from `npm run deploy:contracts`
 *
 * Until all four are set, this returns 503 so the frontend falls back to
 * its client-side illustrative animation instead of erroring visibly.
 */
import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";
import crypto from "node:crypto";

// Small pool of demo provider addresses. Replace with real registered
// ArikeDirectory service providers once you have more than one.
const DEMO_PROVIDERS = [
  { name: "Port Congestion Index", address: process.env.ARIKE_PROVIDER_WALLET || "0x000000000000000000000000000000000000dEaD", serviceId: 0 },
];

const MAX_AMOUNT_MICRO_USDC = 5000; // hard cap: 0.005 USDC per click, regardless of input

// Very lightweight per-instance rate limit (best-effort — serverless
// instances aren't shared, so this isn't a strict global limit, just a
// speed bump against rapid repeated clicks from the same warm instance).
const recentHits = new Map();
const RATE_LIMIT_MS = 8000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Use POST" });
    return;
  }

  const { CIRCLE_API_KEY, CIRCLE_ENTITY_SECRET, ARIKE_DEMO_WALLET_ID, ARIKE_LEDGER_ADDRESS } = process.env;

  if (!CIRCLE_API_KEY || !CIRCLE_ENTITY_SECRET || !ARIKE_DEMO_WALLET_ID || !ARIKE_LEDGER_ADDRESS) {
    res.status(503).json({
      error: "not_configured",
      message: "Real onchain demo isn't wired up yet — set CIRCLE_API_KEY, CIRCLE_ENTITY_SECRET, ARIKE_DEMO_WALLET_ID, and ARIKE_LEDGER_ADDRESS in Vercel's project settings.",
    });
    return;
  }

  const ip = req.headers["x-forwarded-for"] || "unknown";
  const lastHit = recentHits.get(ip);
  if (lastHit && Date.now() - lastHit < RATE_LIMIT_MS) {
    res.status(429).json({ error: "rate_limited", message: "One at a time — try again in a few seconds." });
    return;
  }
  recentHits.set(ip, Date.now());

  try {
    const client = initiateDeveloperControlledWalletsClient({
      apiKey: CIRCLE_API_KEY,
      entitySecret: CIRCLE_ENTITY_SECRET,
    });

    const provider = DEMO_PROVIDERS[Math.floor(Math.random() * DEMO_PROVIDERS.length)];
    const amountMicroUsdc = Math.floor(Math.random() * MAX_AMOUNT_MICRO_USDC) + 1000; // 0.001–0.005 USDC

    const response = await client.createContractExecutionTransaction({
      walletId: ARIKE_DEMO_WALLET_ID,
      contractAddress: ARIKE_LEDGER_ADDRESS,
      abiFunctionSignature: "recordSettlement(address,uint256,uint256)",
      abiParameters: [provider.address, provider.serviceId, amountMicroUsdc],
      fee: { type: "level", config: { feeLevel: "LOW" } },
      idempotencyKey: crypto.randomUUID(),
    });

    res.status(200).json({
      real: true,
      provider: provider.name,
      amountUsdc: (amountMicroUsdc / 1_000_000).toFixed(6),
      transactionId: response.data.id,
      state: response.data.state,
    });
  } catch (err) {
    res.status(500).json({ error: "transaction_failed", message: err.message });
  }
}
