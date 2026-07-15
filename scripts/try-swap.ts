/**
 * CLI wrapper for src/lib/swap.ts — run a real USDC<->EURC swap on Arc Testnet.
 * Run via tsx (not plain node) since this imports a TypeScript module.
 *
 * Usage:
 *   npm run try:swap -- --address=0xYourWalletAddress --amount=1.00 --from=USDC --to=EURC
 */
import "dotenv/config";
import { swapOnArc } from "../src/lib/swap.js";

function arg(name: string, fallback?: string): string | undefined {
  const match = process.argv.find((a) => a.startsWith(`--${name}=`));
  return match ? match.split("=")[1] : fallback;
}

const address = arg("address", process.env.ARIKE_DEPLOYER_WALLET_ADDRESS);
const amount = arg("amount", "1.00")!;
const tokenIn = arg("from", "USDC") as "USDC" | "EURC";
const tokenOut = arg("to", "EURC") as "USDC" | "EURC";

if (!address) {
  throw new Error(
    "Pass --address=0xYourWalletAddress (or set ARIKE_DEPLOYER_WALLET_ADDRESS in .env)."
  );
}

swapOnArc({ tokenIn, tokenOut, amountIn: amount, address: address as `0x${string}` })
  .then((result) => {
    console.log("\nSwap result:", JSON.stringify(result, null, 2));
  })
  .catch((err) => {
    console.error("Swap failed:", err.message);
    process.exit(1);
  });
