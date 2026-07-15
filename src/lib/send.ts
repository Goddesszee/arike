/**
 * ARIKE Send (App Kit Send capability)
 * ----------------------------------------
 * Direct wallet-to-wallet USDC transfer on the same chain — e.g. a provider
 * agent forwarding a share of its earnings to a treasury address, or
 * consolidating funds between two of ARIKE's own wallets.
 *
 * Uses createCircleWalletsAdapter, same as Bridge and Swap — no raw
 * private key anywhere in ARIKE.
 *
 * Docs: https://docs.arc.io/app-kit (Send capability)
 */
import "dotenv/config";
import { AppKit } from "@circle-fin/app-kit";
import { createCircleWalletsAdapter } from "@circle-fin/adapter-circle-wallets";

export interface SendParams {
  fromAddress: `0x${string}`; // Circle-managed wallet's onchain address
  toAddress: `0x${string}`;
  amount: string; // e.g. "10.00"
  token?: "USDC" | "EURC" | "USDT" | "NATIVE";
  // Literal union, not plain `string` — the SDK's chain identifier type is a
  // template-literal union and rejects a widened `string`, even for values
  // that match at runtime.
  chain?: "Arc_Testnet" | "Base_Sepolia" | "Ethereum_Sepolia" | "Avalanche_Fuji" | "Base" | "Ethereum";
}

export async function sendOnArc({
  fromAddress,
  toAddress,
  amount,
  token = "USDC",
  chain = "Arc_Testnet",
}: SendParams) {
  if (!process.env.CIRCLE_API_KEY || !process.env.CIRCLE_ENTITY_SECRET) {
    throw new Error("Set CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET in .env first.");
  }

  const adapter = createCircleWalletsAdapter({
    apiKey: process.env.CIRCLE_API_KEY,
    entitySecret: process.env.CIRCLE_ENTITY_SECRET,
  });

  const kit = new AppKit();

  const result = await kit.send({
    from: { adapter, chain, address: fromAddress },
    to: toAddress,
    amount,
    token,
  });

  console.log(`Sent ${amount} ${token} from ${fromAddress} to ${toAddress} on ${chain}.`);
  return result;
}
