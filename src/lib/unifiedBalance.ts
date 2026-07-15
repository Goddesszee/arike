/**
 * ARIKE Unified Balance (Circle Gateway via Unified Balance Kit)
 * -------------------------------------------------------------------
 * Lets an ARIKE agent deposit USDC from any supported chain into a single
 * chain-abstracted balance, then spend (mint) it on any other supported
 * chain instantly — no manual bridging, no pre-positioned liquidity.
 *
 * Uses createCircleWalletsAdapter, same as bridge.ts and swap.ts — no raw
 * private key anywhere in ARIKE. Per Circle's App Kit FAQ, any EOA-backed
 * adapter (including Circle Wallets) works for Unified Balance directly;
 * no delegate/SCA complexity needed since ARIKE's wallets are EOAs.
 *
 * Note: unlike BridgeKit/SwapKit (which are classes with instance methods),
 * this package exports standalone deposit/spend/getBalances functions that
 * each take a UnifiedBalanceKitContext as their first argument — created
 * once via createUnifiedBalanceKitContext() and reused across calls.
 */
import "dotenv/config";
import {
  createUnifiedBalanceKitContext,
  deposit as depositFn,
  spend as spendFn,
  getBalances as getBalancesFn,
} from "@circle-fin/unified-balance-kit";
import { createCircleWalletsAdapter } from "@circle-fin/adapter-circle-wallets";

// Literal union (not plain `string`) so these are assignable to the SDK's
// UnifiedBalanceChainIdentifier type, which is a template-literal union —
// a widened `string` doesn't satisfy it even though the runtime values match.
export type UBChain =
  | "Arc_Testnet"
  | "Base_Sepolia"
  | "Ethereum_Sepolia"
  | "Avalanche_Fuji"
  | "Base"
  | "Ethereum";

function getContext() {
  if (!process.env.CIRCLE_API_KEY || !process.env.CIRCLE_ENTITY_SECRET) {
    throw new Error("Set CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET in .env first.");
  }
  return createUnifiedBalanceKitContext();
}

function getAdapter() {
  return createCircleWalletsAdapter({
    apiKey: process.env.CIRCLE_API_KEY!,
    entitySecret: process.env.CIRCLE_ENTITY_SECRET!,
  });
}

export interface DepositUSDCParams {
  chain: UBChain; // e.g. "Arc_Testnet", "Base_Sepolia"
  address: `0x${string}`;
  amount: string; // e.g. "10.00"
}

/** Deposit USDC from one chain into ARIKE's unified Gateway balance. */
export async function depositUSDC({ chain, address, amount }: DepositUSDCParams) {
  const context = getContext();
  const adapter = getAdapter();
  const result = await depositFn(context, {
    from: { adapter, chain, address },
    amount,
    token: "USDC",
  });
  console.log(`Deposited ${amount} USDC from ${chain} into ARIKE's unified balance.`);
  return result;
}

export interface SpendUSDCParams {
  toChain: UBChain; // where the agent needs USDC minted right now
  address: `0x${string}`; // same Circle-managed wallet on both sides
  amount: string;
}

/**
 * Spend from the unified balance, minting USDC on whichever chain an agent
 * needs it right now. `from` deliberately has no chain — Unified Balance
 * spend draws from the aggregated balance across whatever chains hold a
 * deposit, not from one specific chain; the provider auto-allocates based
 * on `amountIn`.
 */
export async function spendUSDC({ toChain, address, amount }: SpendUSDCParams) {
  const context = getContext();
  const adapter = getAdapter();
  const result = await spendFn(context, {
    from: { adapter, address },
    to: { adapter, chain: toChain, address },
    token: "USDC",
    amount,
  });
  console.log(`Spent ${amount} USDC from unified balance -> minted on ${toChain}.`);
  return result;
}

/** Check ARIKE's unified USDC balance — queries across every chain the adapter's address holds a deposit on. */
export async function getUnifiedBalance() {
  const context = getContext();
  const adapter = getAdapter();
  const result = await getBalancesFn(context, {
    token: "USDC",
    sources: { adapter },
    includePending: true,
  });
  return result;
}
