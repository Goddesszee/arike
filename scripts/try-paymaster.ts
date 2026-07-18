/**
 * CLI wrapper for src/lib/paymaster.ts — submits a real, trivial transaction
 * (a zero-value self-call) from a Base Sepolia smart account, with gas paid
 * in USDC via Circle Paymaster instead of ETH. Proves the whole path works
 * end to end, not just that the code compiles.
 *
 * Usage:
 *   npm run try:paymaster
 *
 * Requires in .env:
 *   PAYMASTER_PRIVATE_KEY - owner key for a Base Sepolia smart account
 *                           (needs a small USDC balance on Base Sepolia —
 *                           get testnet USDC from faucet.circle.com, select
 *                           Base Sepolia)
 *   PIMLICO_API_KEY        - free at pimlico.io
 */
import "dotenv/config";
import { privateKeyToAccount } from "viem/accounts";
import { sendGaslessUsdcTransaction } from "../src/lib/paymaster.js";

const PRIVATE_KEY = process.env.PAYMASTER_PRIVATE_KEY as `0x${string}` | undefined;
const PIMLICO_API_KEY = process.env.PIMLICO_API_KEY;

if (!PRIVATE_KEY) {
  throw new Error("Set PAYMASTER_PRIVATE_KEY in .env — an owner key for a Base Sepolia smart account.");
}
if (!PIMLICO_API_KEY) {
  throw new Error("Set PIMLICO_API_KEY in .env — get a free key at pimlico.io.");
}

const owner = privateKeyToAccount(PRIVATE_KEY);

sendGaslessUsdcTransaction({
  privateKey: PRIVATE_KEY,
  pimlicoApiKey: PIMLICO_API_KEY,
  // Trivial, safe call: send 0 ETH to self with no data. Real transaction,
  // real gas paid in USDC — just doesn't do anything destructive, so it's
  // safe to run repeatedly as a demo/proof.
  calls: [{ to: owner.address, data: "0x", value: 0n }],
})
  .then((receipt) => {
    console.log("\nPaymaster demo succeeded:", JSON.stringify(receipt, (_k, v) => (typeof v === "bigint" ? v.toString() : v), 2));
  })
  .catch((err) => {
    console.error("Paymaster demo failed:", err.message);
    process.exit(1);
  });
