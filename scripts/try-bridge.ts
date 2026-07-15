/**
 * CLI wrapper for src/lib/bridge.ts — bridge USDC from a testnet EVM chain
 * onto Arc Testnet. Run via tsx (not plain node) since this imports a
 * TypeScript module.
 *
 * Usage:
 *   npm run try:bridge -- --address=0xYourWalletAddress --amount=5.00 --from=Base_Sepolia
 *
 * Note: your Circle-managed wallet needs a small USDC balance on the
 * SOURCE chain (e.g. Base Sepolia) for this to succeed — the Arc Testnet
 * faucet only funds you on Arc itself.
 */
import "dotenv/config";
import { bridgeToArc } from "../src/lib/bridge.js";

function arg(name: string, fallback?: string): string | undefined {
  const match = process.argv.find((a) => a.startsWith(`--${name}=`));
  return match ? match.split("=")[1] : fallback;
}

const address = arg("address", process.env.ARIKE_DEPLOYER_WALLET_ADDRESS);
const amount = arg("amount", "5.00")!;
const fromChain = arg("from", "Base_Sepolia") as "Base_Sepolia" | "Ethereum_Sepolia" | "Avalanche_Fuji";

if (!address) {
  throw new Error(
    "Pass --address=0xYourWalletAddress (or set ARIKE_DEPLOYER_WALLET_ADDRESS in .env)."
  );
}

bridgeToArc({ fromChain, amountUsdc: amount, address: address as `0x${string}` })
  .then((result) => {
    console.log("\nBridge result:", JSON.stringify(result, null, 2));
  })
  .catch((err) => {
    console.error("Bridge failed:", err.message);
    process.exit(1);
  });
