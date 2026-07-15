/**
 * ARIKE Bridge (CCTP V2 via Circle Bridge Kit)
 * -----------------------------------------------
 * Lets ARIKE agents move USDC onto Arc Testnet from another chain before
 * transacting. Two scenarios this covers:
 *
 *   1. A consumer agent holds USDC on, say, Base Sepolia — bridge it to Arc
 *      first, then pay Arc-based provider services via Nanopayments.
 *   2. A provider agent wants its earnings consolidated on Arc regardless of
 *      which chain a paying consumer originated from.
 *
 * Uses Circle's official Bridge Kit, which wraps CCTPv2 (token approval,
 * burn, attestation, mint) into a single `kit.bridge()` call.
 * Docs: https://developers.circle.com/bridge-kit
 * Verified against the installed package's type definitions (bridge-kit 1.12,
 * adapter-viem-v2 1.13) — API confirmed: `new BridgeKit()`,
 * `createViemAdapterFromPrivateKey`, chain identifiers as string literals
 * ('Arc_Testnet' family exposed via the `ArcTestnet` constant).
 */
import "dotenv/config";
import { BridgeKit, ArcTestnet, BaseSepolia, EthereumSepolia, AvalancheFuji } from "@circle-fin/bridge-kit";
import { createViemAdapterFromPrivateKey } from "@circle-fin/adapter-viem-v2";

const SOURCE_CHAINS = {
  Base_Sepolia: BaseSepolia,
  Ethereum_Sepolia: EthereumSepolia,
  Avalanche_Fuji: AvalancheFuji,
} as const;

export interface BridgeParams {
  fromChain: keyof typeof SOURCE_CHAINS;
  amountUsdc: string; // e.g. "5.00"
  privateKey: `0x${string}`; // use a secrets manager in real use, not plain env
}

/**
 * Bridges USDC from another chain to Arc Testnet using a single adapter
 * that signs on both sides (same private key controls both addresses).
 */
export async function bridgeToArc({ fromChain, amountUsdc, privateKey }: BridgeParams) {
  const adapter = createViemAdapterFromPrivateKey({ privateKey });
  const kit = new BridgeKit();

  kit.on("*", (payload: any) => console.log(`[bridge] ${payload.method ?? "step"}`));

  const result = await kit.bridge({
    from: { adapter, chain: SOURCE_CHAINS[fromChain] },
    to: { adapter, chain: ArcTestnet },
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
  privateKey,
  recipientAddress,
}: BridgeParams & { recipientAddress: `0x${string}` }) {
  const adapter = createViemAdapterFromPrivateKey({ privateKey });
  const kit = new BridgeKit();

  const result = await kit.bridge({
    from: { adapter, chain: SOURCE_CHAINS[fromChain] },
    to: { recipientAddress, chain: ArcTestnet, useForwarder: true },
    amount: amountUsdc,
  });

  console.log(`Bridged ${amountUsdc} USDC from ${fromChain} to ${recipientAddress} on Arc Testnet.`);
  return result;
}

export const ARC_TESTNET_CHAIN_ID = 5042002;
