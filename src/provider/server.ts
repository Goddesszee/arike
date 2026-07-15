/**
 * ARIKE Provider: Port Congestion Index
 * --------------------------------------
 * An x402-compatible HTTP service. Any agent (yours or someone else's) can
 * discover this via `circle services search`, inspect its price, and pay
 * for a live congestion reading with a single Nanopayment.
 *
 * Flow (simplified x402 pattern):
 *   1. Request with no payment proof -> 402 Payment Required + price/address
 *   2. Requester pays via `circle services pay` (their agent wallet -> ours)
 *   3. Request retried with an X-PAYMENT header proving settlement -> 200 + data
 *
 * NOTE: payment verification here is a minimal stand-in for demo purposes.
 * Before final submission, wire this to Circle's official x402 facilitator/
 * verification flow (see Agent Nanopayments docs) so payments are verified
 * against real onchain settlement rather than trusting the header.
 */
import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PROVIDER_PORT || 4021;
const PRICE_USDC = 0.002;
const RECEIVE_ADDRESS = process.env.ARIKE_PROVIDER_WALLET || "0xYourProviderWalletAddress";
const CHAIN = process.env.ARIKE_CHAIN || "BASE";

// Ports ARIKE tracks — swap in a real data source before final submission.
const PORTS = ["Lagos", "Mombasa", "Rotterdam", "Singapore", "Los Angeles"];

function currentCongestionReading() {
  return PORTS.map((port) => ({
    port,
    congestionScore: Number((Math.random() * 0.6 + 0.2).toFixed(2)), // 0.2–0.8
    avgWaitDays: Number((Math.random() * 4 + 0.5).toFixed(1)),
    updatedAt: new Date().toISOString(),
  }));
}

app.get("/port-congestion", (req, res) => {
  const paymentProof = req.header("X-PAYMENT");

  if (!paymentProof) {
    return res.status(402).json({
      error: "Payment required",
      x402: {
        price: PRICE_USDC,
        currency: "USDC",
        chain: CHAIN,
        payTo: RECEIVE_ADDRESS,
        description: "ARIKE Port Congestion Index — live reading, 5 major ports",
      },
    });
  }

  // TODO(before final submission): verify `paymentProof` against Circle's
  // x402 facilitator instead of accepting any non-empty header.
  return res.json({
    service: "ARIKE Port Congestion Index",
    priceChargedUsdc: PRICE_USDC,
    data: currentCongestionReading(),
  });
});

app.get("/", (_req, res) => {
  res.json({ service: "ARIKE Provider", endpoints: ["/port-congestion"] });
});

app.listen(PORT, () => {
  console.log(`ARIKE provider service listening on http://localhost:${PORT}`);
  console.log(`Register this on the Circle Agent Marketplace once tunneled/deployed publicly.`);
});
