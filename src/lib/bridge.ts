/**
 * ARIKE Bridge (CCTP V2 via Circle Bridge Kit + Circle Wallets adapter)
 * -------------------------------------------------------------------------
 * Lets ARIKE agents move USDC onto Arc Testnet from another chain before
 * transacting. Two scenarios this covers:
 *
 *   1. A consumer agent holds USDC on, say, Base Sepolia — bridge it to Arc
 *      first, then pay Arc-based provider services via Nanopayments.
 *   2. A provider agent wants its earnings consolidated on Arc regardless of
 *      which chain a paying consumer originated from.
 *
 * Uses createCircleWalletsAdapter — same Circle-managed wallet as every
 * other ARIKE module, no raw private key anywhere in this codebase.
 *
 * Correction applied per Circle's App Kit FAQ: FAST transfer speed (the
 * default) takes its fee out of the transferred amount, and on Arc Testnet
 * that fee runs around 1.4 USDC — small test transfers can revert with
 * "Max fee must be less than amount". SLOW is free and reliable for
 * small testnet amounts, at the cost of longer finality. ARIKE defaults to
 * SLOW; pass speed: "FAST" explicitly if you want the faster (fee-bearing)
 * path and know your amount clears the fee.
 *
 * Docs: https://developers.circle.com/bridge-kit
 */
import "dotenv/config";
import { BridgeKit, ArcTestnet, BaseSepolia, EthereumSepolia, AvalancheFuji } from "@circle-fin/bridge-kit";
import { createCircleWalletsAdapter } from "@circle-fin/adapter-circle-wallets";

const SOURCE_CHAINS = {
  Base_Sepolia: BaseSepolia,
  Ethereum_Sepolia: EthereumSepolia,
  Avalanche_Fuji: AvalancheFuji,
} as const;

export interface BridgeParams {
  fromChain: keyof typeof SOURCE_CHAINS;
  amountUsdc: string; // e.g. "5.00"
  address: `0x${string}`; // the Circle-managed wallet's onchain address, same on every EVM chain
  speed?: "FAST" | "SLOW"; // defaults to SLOW — see correction note above
}

function getAdapter() {
  if (!process.env.CIRCLE_API_KEY || !process.env.CIRCLE_ENTITY_SECRET) {
    throw new Error("Set CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET in .env first.");
  }
  return createCircleWalletsAdapter({
    apiKey: process.env.CIRCLE_API_KEY,
    entitySecret: process.env.CIRCLE_ENTITY_SECRET,
  });
}

function attachLogging(kit: BridgeKit) {
  // Standalone Bridge Kit emits unprefixed lifecycle events (unlike the
  // full App Kit's "bridge.*" namespacing). Confirmed event names from
  // @circle-fin/provider-cctp-v2's own types: approve, burn,
  // fetchAttestation, mint, reAttest.
  kit.on("approve", (e: any) => console.log(`[bridge] approved: ${e.values?.txHash}`));
  kit.on("burn", (e: any) => console.log(`[bridge] burned: ${e.values?.txHash}`));
  kit.on("fetchAttestation", () => console.log(`[bridge] attestation received`));
  kit.on("mint", (e: any) => console.log(`[bridge] minted: ${e.values?.txHash}`));
}

/**
 * Bridges USDC from another chain to Arc Testnet. Same Circle-managed
 * wallet address signs on both sides.
 */
export async function bridgeToArc({ fromChain, amountUsdc, address, speed = "SLOW" }: BridgeParams) {
  const adapter = getAdapter();
  const kit = new BridgeKit();
  attachLogging(kit);

  const result = await kit.bridge({
    from: { adapter, chain: SOURCE_CHAINS[fromChain], address },
    to: { adapter, chain: ArcTestnet, address },
    amount: amountUsdc,
    config: { transferSpeed: speed },
  });

  if (result.state !== "success") {
    console.warn(
      `Bridge did not fully complete (state: ${result.state}). ` +
        `Inspect result.steps for the failed step, then use retryBridge() if it's recoverable.`
    );
  } else {
    console.log(`Bridged ${amountUsdc} USDC from ${fromChain} to Arc Testnet.`);
  }
  return result;
}

/**
 * Resumes a failed or partially-completed bridge from wherever it left off
 * — per Circle's docs, bridges are recoverable, not lost, on failure.
 * Pass the same source/destination chain identifiers used in the original
 * bridgeToArc call; the adapter is recreated internally.
 */
export async function retryBridge(
  failedResult: any,
  fromChain: keyof typeof SOURCE_CHAINS
) {
  const adapter = getAdapter();
  const kit = new BridgeKit();
  return kit.retry(failedResult, {
    from: adapter,
    to: adapter,
  });
}

/**
 * Forwarder-only variant: use when ARIKE doesn't control a wallet on the
 * destination side (e.g. a third-party provider agent just gives you their
 * Arc address) — Circle's relayer handles attestation + mint automatically.
 */
export async function bridgeToArcRecipient({
  fromChain,
  amountUsdc,
  address,
  recipientAddress,
  speed = "SLOW",
}: BridgeParams & { recipientAddress: `0x${string}` }) {
  const adapter = getAdapter();
  const kit = new BridgeKit();
  attachLogging(kit);

  const result = await kit.bridge({
    from: { adapter, chain: SOURCE_CHAINS[fromChain], address },
    to: { recipientAddress, chain: ArcTestnet, useForwarder: true },
    amount: amountUsdc,
    config: { transferSpeed: speed },
  });

  console.log(`Bridged ${amountUsdc} USDC from ${fromChain} to ${recipientAddress} on Arc Testnet.`);
  return result;
}

export const ARC_TESTNET_CHAIN_ID = 5042002;
