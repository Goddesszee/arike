/**
 * ARIKE Consumer Agent: Trade Route Planner
 * -------------------------------------------
 * Given a goal ("plan the cheapest safe shipping route from Lagos to
 * Rotterdam next week"), this agent autonomously:
 *   1. Decides what data it needs (no hardcoded service list)
 *   2. Searches the Circle Agent Marketplace for matching services
 *   3. Inspects price + pays for each one it needs via Nanopayments (x402)
 *   4. Reasons over the paid data to produce a final recommendation
 *
 * No human approves any individual payment — that's the point.
 * Run with --mock to exercise the full flow without a funded wallet yet.
 */
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import {
  getAgentWalletAddress,
  getGatewayBalance,
  searchServices,
  inspectService,
  payForService,
  isMock,
} from "../lib/circle-tools.js";

const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY from env

const GOAL =
  process.argv.find((a) => a.startsWith("--goal="))?.split("=")[1] ??
  "Plan the best week to ship a container from Lagos to Rotterdam, minimizing cost and delay risk.";

const CHAIN = process.env.ARIKE_CHAIN || "BASE";
const MAX_SPEND_PER_SERVICE = Number(process.env.ARIKE_MAX_SPEND || 0.02);

interface PaidResult {
  service: string;
  amountPaidUsdc: number;
  data: string;
}

async function decideNeededTopics(goal: string): Promise<string[]> {
  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 200,
    messages: [
      {
        role: "user",
        content: `A trade-planning agent has this goal: "${goal}".
List 2-4 short search terms (2-3 words each) for data services it should buy
to make a well-informed recommendation (e.g. "port congestion", "fx rates",
"weather risk", "flight prices"). Respond with ONLY a JSON array of strings,
nothing else.`,
      },
    ],
  });
  const text = msg.content.find((b) => b.type === "text")?.text ?? "[]";
  try {
    return JSON.parse(text.trim());
  } catch {
    return ["port congestion", "fx rates"];
  }
}

async function acquireData(topics: string[], walletAddress: string): Promise<PaidResult[]> {
  const results: PaidResult[] = [];

  for (const topic of topics) {
    const candidates = await searchServices(topic);
    if (candidates.length === 0) {
      console.log(`  [ARIKE] no service found for "${topic}", skipping`);
      continue;
    }
    const chosen = candidates[0]; // simplest strategy: take top match
    console.log(`  [ARIKE] found service for "${topic}": ${chosen.url}`);

    const terms = await inspectService(chosen.url);
    console.log(`  [ARIKE] payment terms: ${terms}`);

    const paid = await payForService(chosen.url, walletAddress, CHAIN, MAX_SPEND_PER_SERVICE);
    console.log(`  [ARIKE] paid ${paid.amountPaidUsdc} USDC -> ${chosen.url}`);

    results.push({
      service: chosen.name ?? chosen.url,
      amountPaidUsdc: paid.amountPaidUsdc,
      data: paid.responseBody,
    });
  }

  return results;
}

async function synthesizeRecommendation(goal: string, acquired: PaidResult[]): Promise<string> {
  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 500,
    messages: [
      {
        role: "user",
        content: `Goal: ${goal}

You purchased the following data from paid agent services:
${acquired.map((r) => `- ${r.service} (paid ${r.amountPaidUsdc} USDC): ${r.data}`).join("\n")}

Write a short, concrete recommendation (4-6 sentences) using this data.`,
      },
    ],
  });
  return msg.content.find((b) => b.type === "text")?.text ?? "(no recommendation generated)";
}

async function main() {
  console.log(`\nARIKE Consumer Agent${isMock ? " [MOCK MODE]" : ""}`);
  console.log(`Goal: ${GOAL}\n`);

  const walletAddress = await getAgentWalletAddress(CHAIN);
  console.log(`Agent wallet: ${walletAddress}`);
  console.log(`Gateway balance: ${await getGatewayBalance(walletAddress, CHAIN)}\n`);

  console.log(`Deciding what data is needed...`);
  const topics = await decideNeededTopics(GOAL);
  console.log(`Topics: ${topics.join(", ")}\n`);

  console.log(`Acquiring data via Nanopayments...`);
  const acquired = await acquireData(topics, walletAddress);

  const totalSpent = acquired.reduce((sum, r) => sum + r.amountPaidUsdc, 0);
  console.log(`\nTotal spent: ${totalSpent.toFixed(4)} USDC across ${acquired.length} services\n`);

  console.log(`Synthesizing recommendation...\n`);
  const recommendation = await synthesizeRecommendation(GOAL, acquired);
  console.log(`--- ARIKE Recommendation ---\n${recommendation}\n`);
}

main().catch((err) => {
  console.error("ARIKE consumer agent failed:", err.message);
  process.exit(1);
});
