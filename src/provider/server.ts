/**
 * ARIKE Provider Services
 * --------------------------
 * Three x402-compatible HTTP endpoints. Any agent (yours or someone else's)
 * can discover these via `circle services search`, inspect price, and pay
 * for a live reading with a single Nanopayment. Hosting three distinct
 * services — not one — is what gives the consumer agent something real to
 * compare and choose between, rather than a single hardcoded call.
 *
 * Flow (simplified x402 pattern) for each endpoint:
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
const RECEIVE_ADDRESS = process.env.ARIKE_PROVIDER_WALLET || "0xYourProviderWalletAddress";
const CHAIN = process.env.ARIKE_CHAIN || "BASE";

function requirePayment(price: number, description: string) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const paymentProof = req.header("X-PAYMENT");
    if (!paymentProof) {
      res.status(402).json({
        error: "Payment required",
        x402: { price, currency: "USDC", chain: CHAIN, payTo: RECEIVE_ADDRESS, description },
      });
      return;
    }
    // TODO(before final submission): verify `paymentProof` against Circle's
    // x402 facilitator instead of accepting any non-empty header.
    next();
  };
}

// ── Service 1: Port Congestion Index ──
const PORTS = ["Lagos", "Mombasa", "Rotterdam", "Singapore", "Los Angeles"];
const PORT_CONGESTION_PRICE = 0.002;

function currentCongestionReading() {
  return PORTS.map((port) => ({
    port,
    congestionScore: Number((Math.random() * 0.6 + 0.2).toFixed(2)), // 0.2–0.8
    avgWaitDays: Number((Math.random() * 4 + 0.5).toFixed(1)),
    updatedAt: new Date().toISOString(),
  }));
}

app.get(
  "/port-congestion",
  requirePayment(PORT_CONGESTION_PRICE, "ARIKE Port Congestion Index — live reading, 5 major ports"),
  (_req, res) => {
    res.json({
      service: "ARIKE Port Congestion Index",
      priceChargedUsdc: PORT_CONGESTION_PRICE,
      data: currentCongestionReading(),
    });
  }
);

// ── Service 2: FX Rate Oracle ──
const FX_PAIRS = ["USD/EUR", "USD/NGN", "USD/GBP", "EUR/NGN"];
const FX_PRICE = 0.001;

function currentFxReading() {
  const baseline: Record<string, number> = { "USD/EUR": 0.92, "USD/NGN": 1550, "USD/GBP": 0.78, "EUR/NGN": 1685 };
  return FX_PAIRS.map((pair) => ({
    pair,
    rate: Number((baseline[pair] * (1 + (Math.random() - 0.5) * 0.02)).toFixed(4)),
    updatedAt: new Date().toISOString(),
  }));
}

app.get(
  "/fx-rate",
  requirePayment(FX_PRICE, "ARIKE FX Rate Oracle — live cross rates, 4 pairs"),
  (_req, res) => {
    res.json({
      service: "ARIKE FX Rate Oracle",
      priceChargedUsdc: FX_PRICE,
      data: currentFxReading(),
    });
  }
);

// ── Service 3: Weather Risk Feed ──
const ROUTES = ["North Atlantic", "Suez Corridor", "Cape of Good Hope", "Strait of Malacca"];
const WEATHER_PRICE = 0.003;

function currentWeatherRiskReading() {
  const conditions = ["clear", "moderate swell", "storm warning", "reduced visibility"];
  return ROUTES.map((route) => ({
    route,
    condition: conditions[Math.floor(Math.random() * conditions.length)],
    riskScore: Number((Math.random() * 0.7 + 0.1).toFixed(2)), // 0.1–0.8
    updatedAt: new Date().toISOString(),
  }));
}

app.get(
  "/weather-risk",
  requirePayment(WEATHER_PRICE, "ARIKE Weather Risk Feed — live shipping-route risk, 4 routes"),
  (_req, res) => {
    res.json({
      service: "ARIKE Weather Risk Feed",
      priceChargedUsdc: WEATHER_PRICE,
      data: currentWeatherRiskReading(),
    });
  }
);

app.get("/", (_req, res) => {
  res.json({
    service: "ARIKE Provider",
    endpoints: ["/port-congestion", "/fx-rate", "/weather-risk"],
  });
});

app.listen(PORT, () => {
  console.log(`ARIKE provider services listening on http://localhost:${PORT}`);
  console.log(`Endpoints: /port-congestion, /fx-rate, /weather-risk`);
  console.log(`Register these on the Circle Agent Marketplace once tunneled/deployed publicly.`);
});
