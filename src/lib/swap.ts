/**
 * ARIKE Swap (App Kit Swap, on Arc Testnet)
 * ---------------------------------------------
 * Lets an ARIKE agent swap between stablecoins on the same chain — e.g. a
 * provider that earns USDC but wants to hold EURC, or a consumer agent
 * rebalancing before a payment run. Arc Testnet is one of the few testnets
 * Swap supports (USDC, EURC, and cirBTC only).
 *
 * Uses createCircleWalletsAdapter so this operates through the same
 * Circle-managed wallet as every other ARIKE module — no raw private key
 * ever enters this codebase. Note: the adapter takes the wallet's onchain
 * ADDRESS per call (not its Circle walletId) — it resolves the walletId
 * internally via Circle's API.
 *
 * Docs: https://docs.arc.io/app-kit/swap
 * Requires a free "kit key" from the Circle Console (separate from your
 * CIRCLE_API_KEY) — see CIRCLE_SETUP.md.
 */
import "dotenv/config";
import { SwapKit } from "@circle-fin/swap-kit";
import { createCircleWalletsAdapter } from "@circle-fin/adapter-circle-wallets";

const KIT_KEY = process.env.CIRCLE_KIT_KEY;

export interface SwapParams {
  tokenIn: "USDC" | "EURC";
  tokenOut: "USDC" | "EURC";
  amountIn: string; // e.g. "1.00"
  address: `0x${string}`; // the wallet's onchain address (not its Circle walletId)
}

export async function swapOnArc({ tokenIn, tokenOut, amountIn, address }: SwapParams) {
  if (!KIT_KEY) {
    throw new Error(
      "Set CIRCLE_KIT_KEY in .env — get a free kit key from the Circle Console (Swap requires one, separate from your API key)."
    );
  }
  if (!process.env.CIRCLE_API_KEY || !process.env.CIRCLE_ENTITY_SECRET) {
    throw new Error("Set CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET in .env first.");
  }

  const adapter = createCircleWalletsAdapter({
    apiKey: process.env.CIRCLE_API_KEY,
    entitySecret: process.env.CIRCLE_ENTITY_SECRET,
  });

  const kit = new SwapKit();

  const result = await kit.swap({
    from: { adapter, chain: "Arc_Testnet", address },
    tokenIn,
    tokenOut,
    amountIn,
    config: { kitKey: KIT_KEY },
  });

  console.log(`Swapped ${amountIn} ${tokenIn} -> ${tokenOut} on Arc Testnet (${address}).`);
  return result;
}
