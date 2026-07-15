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
 * Uses createCircleWalletsAdapter so bridging happens through the same
 * Circle-managed wallet as every other ARIKE module — no raw private key
 * ever enters this codebase (earlier draft used a raw private-key adapter;
 * this is the corrected, consistent version).
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

/**
 * Bridges USDC from another chain to Arc Testnet. Same Circle-managed
 * wallet address signs on both sides.
 */
export async function bridgeToArc({ fromChain, amountUsdc, address }: BridgeParams) {
  const adapter = getAdapter();
  const kit = new BridgeKit();

  kit.on("*", (payload: any) => console.log(`[bridge] ${payload.method ?? "step"}`));

  const result = await kit.bridge({
    from: { adapter, chain: SOURCE_CHAINS[fromChain], address },
    to: { adapter, chain: ArcTestnet, address },
    amount: amountUsdc,
  });

  console.log(`Bridged ${amountUsdc} USDC from ${fromChain} to Arc Testnet.`);
  return result;
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
}: BridgeParams & { recipientAddress: `0x${string}` }) {
  const adapter = getAdapter();
  const kit = new BridgeKit();

  const result = await kit.bridge({
    from: { adapter, chain: SOURCE_CHAINS[fromChain], address },
    to: { recipientAddress, chain: ArcTestnet, useForwarder: true },
    amount: amountUsdc,
  });

  console.log(`Bridged ${amountUsdc} USDC from ${fromChain} to ${recipientAddress} on Arc Testnet.`);
  return result;
}

export const ARC_TESTNET_CHAIN_ID = 5042002;
