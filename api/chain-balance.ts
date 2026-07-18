/**
 * GET /api/chain-balance?address=0x...&chain=Base_Sepolia
 * Read-only ERC20 balanceOf check on a specific testnet chain — used by
 * Bridge's "From" panel to show a real source-chain balance instead of a
 * permanent placeholder. No wallet/credentials needed, just the RPC.
 *
 * USDC testnet contract addresses verified against Circle's own skills repo:
 * https://github.com/circlefin/skills/blob/master/plugins/circle/skills/use-usdc/SKILL.md
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createPublicClient, http, defineChain, erc20Abi } from "viem";

const CHAINS = {
  Base_Sepolia: {
    chain: defineChain({
      id: 84532,
      name: "Base Sepolia",
      nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
      rpcUrls: { default: { http: ["https://sepolia.base.org"] } },
    }),
    usdcAddress: "0x036CbD53842c5426634e7929541eC2318f3dCF7e" as `0x${string}`,
  },
  Ethereum_Sepolia: {
    chain: defineChain({
      id: 11155111,
      name: "Ethereum Sepolia",
      nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
      rpcUrls: { default: { http: ["https://ethereum-sepolia-rpc.publicnode.com"] } },
    }),
    usdcAddress: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" as `0x${string}`,
  },
  Avalanche_Fuji: {
    chain: defineChain({
      id: 43113,
      name: "Avalanche Fuji",
      nativeCurrency: { name: "AVAX", symbol: "AVAX", decimals: 18 },
      rpcUrls: { default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] } },
    }),
    usdcAddress: "0x5425890298aed601595a70AB815c96711a31Bc65" as `0x${string}`,
  },
} as const;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const address = req.query.address as string;
  const chainKey = req.query.chain as keyof typeof CHAINS;

  if (!address || !chainKey || !CHAINS[chainKey]) {
    res.status(400).json({ ok: false, error: "Missing or invalid address/chain" });
    return;
  }

  try {
    const { chain, usdcAddress } = CHAINS[chainKey];
    const client = createPublicClient({ chain, transport: http() });

    const balance = await client.readContract({
      address: usdcAddress,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [address as `0x${string}`],
    });

    const balanceUsdc = (Number(balance) / 1_000_000).toFixed(6); // USDC is 6 decimals
    res.status(200).json({ ok: true, balanceUsdc, chain: chainKey });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
