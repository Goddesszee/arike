/**
 * ARIKE Swap (App Kit Swap, on Arc Testnet)
 * ---------------------------------------------
 * Lets an ARIKE agent swap between stablecoins on the same chain — e.g. a
 * provider that earns USDC but wants to hold EURC, or a consumer agent
 * rebalancing before a payment run. Arc Testnet supports Swap for USDC,
 * EURC, and cirBTC only (thin liquidity vs mainnet).
 *
 * Uses createCircleWalletsAdapter — same Circle-managed wallet as every
 * other ARIKE module, no raw private key anywhere in this codebase.
 * Swap is server-side only today (per Circle's App Kit FAQ) — fine here,
 * since ARIKE's agents already run server-side.
 *
 * Corrections applied per Circle's App Kit FAQ:
 *   - Call estimateSwap first: testnet liquidity is thin and swaps revert
 *     often if a route can't fill at the requested price. Confirms a route
 *     exists before spending gas on a doomed transaction.
 *   - Default slippageBps explicitly (never 0 — that all but guarantees a
 *     revert on testnet).
 *   - kitKey is required for Swap specifically (not Bridge/Send/Unified
 *     Balance) — a separate free credential from the Circle Console.
 *
 * Docs: https://docs.arc.io/app-kit/swap
 */
import "dotenv/config";
import { SwapKit } from "@circle-fin/swap-kit";
import { createCircleWalletsAdapter } from "@circle-fin/adapter-circle-wallets";

const KIT_KEY = process.env.CIRCLE_KIT_KEY;
const DEFAULT_SLIPPAGE_BPS = 300; // 3% — Circle's own default, never use 0 on testnet

export interface SwapParams {
  tokenIn: "USDC" | "EURC";
  tokenOut: "USDC" | "EURC";
  amountIn: string; // e.g. "1.00" — keep small on testnet, thin liquidity
  address: `0x${string}`; // the wallet's onchain address (not its Circle walletId)
  slippageBps?: number;
}

function getAdapterAndKit() {
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
  return { adapter, kit: new SwapKit() };
}

/**
 * Checks whether a route exists and what it would cost, WITHOUT executing
 * anything. Always call this before swapOnArc on testnet — thin liquidity
 * means routes frequently don't exist at all, and this fails fast instead
 * of reverting an onchain transaction.
 */
export async function estimateSwapOnArc({ tokenIn, tokenOut, amountIn, address, slippageBps }: SwapParams) {
  const { adapter, kit } = getAdapterAndKit();

  const estimate = await kit.estimate({
    from: { adapter, chain: "Arc_Testnet", address },
    tokenIn,
    tokenOut,
    amountIn,
    config: { kitKey: KIT_KEY!, slippageBps: slippageBps ?? DEFAULT_SLIPPAGE_BPS },
  });

  console.log(
    `Estimate: ${amountIn} ${tokenIn} -> ~${estimate.estimatedOutput.amount} ${tokenOut} ` +
      `(guaranteed minimum: ${estimate.stopLimit.amount})`
  );
  return estimate;
}

export async function swapOnArc({ tokenIn, tokenOut, amountIn, address, slippageBps }: SwapParams) {
  const { adapter, kit } = getAdapterAndKit();

  const result = await kit.swap({
    from: { adapter, chain: "Arc_Testnet", address },
    tokenIn,
    tokenOut,
    amountIn,
    config: { kitKey: KIT_KEY!, slippageBps: slippageBps ?? DEFAULT_SLIPPAGE_BPS },
  });

  console.log(`Swapped ${amountIn} ${tokenIn} -> ${tokenOut} on Arc Testnet (${address}).`);
  return result;
}
