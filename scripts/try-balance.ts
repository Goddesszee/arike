/**
 * CLI wrapper for src/lib/unifiedBalance.ts.
 *
 * Usage:
 *   npm run try:balance -- deposit --chain=Base_Sepolia --address=0x... --amount=5.00
 *   npm run try:balance -- spend --to=Arc_Testnet --address=0x... --amount=2.00
 *   npm run try:balance -- check
 */
import "dotenv/config";
import { depositUSDC, spendUSDC, getUnifiedBalance, type UBChain } from "../src/lib/unifiedBalance.js";

function arg(name: string, fallback?: string): string | undefined {
  const match = process.argv.find((a) => a.startsWith(`--${name}=`));
  return match ? match.split("=")[1] : fallback;
}

const command = process.argv[2];
const address = arg("address", process.env.ARIKE_DEPLOYER_WALLET_ADDRESS) as `0x${string}` | undefined;
const amount = arg("amount", "1.00")!;

async function main() {
  if (command === "deposit") {
    const chain = arg("chain", "Base_Sepolia") as UBChain;
    if (!address) throw new Error("Pass --address=0x... (or set ARIKE_DEPLOYER_WALLET_ADDRESS in .env).");
    const result = await depositUSDC({ chain, address, amount });
    console.log("\nDeposit result:", JSON.stringify(result, null, 2));
  } else if (command === "spend") {
    const toChain = arg("to", "Arc_Testnet") as UBChain;
    if (!address) throw new Error("Pass --address=0x... (or set ARIKE_DEPLOYER_WALLET_ADDRESS in .env).");
    const result = await spendUSDC({ toChain, address, amount });
    console.log("\nSpend result:", JSON.stringify(result, null, 2));
  } else if (command === "check") {
    const result = await getUnifiedBalance();
    console.log("\nUnified balance:", JSON.stringify(result, null, 2));
  } else {
    throw new Error("Usage: npm run try:balance -- <deposit|spend|check> [--chain=...] [--to=...] [--address=...] [--amount=...]");
  }
}

main().catch((err) => {
  console.error("Unified balance operation failed:", err.message);
  process.exit(1);
});
