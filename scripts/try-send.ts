/**
 * CLI wrapper for src/lib/send.ts — direct wallet-to-wallet USDC transfer.
 *
 * Usage:
 *   npm run try:send -- --from=0xYourWallet --to=0xRecipient --amount=1.00
 */
import "dotenv/config";
import { sendOnArc } from "../src/lib/send.js";

function arg(name: string, fallback?: string): string | undefined {
  const match = process.argv.find((a) => a.startsWith(`--${name}=`));
  return match ? match.split("=")[1] : fallback;
}

const fromAddress = arg("from", process.env.ARIKE_DEPLOYER_WALLET_ADDRESS);
const toAddress = arg("to");
const amount = arg("amount", "1.00")!;

if (!fromAddress || !toAddress) {
  throw new Error("Pass --from=0x... and --to=0x... (from can also default via ARIKE_DEPLOYER_WALLET_ADDRESS in .env).");
}

sendOnArc({
  fromAddress: fromAddress as `0x${string}`,
  toAddress: toAddress as `0x${string}`,
  amount,
})
  .then((result) => console.log("\nSend result:", JSON.stringify(result, null, 2)))
  .catch((err) => {
    console.error("Send failed:", err.message);
    process.exit(1);
  });
