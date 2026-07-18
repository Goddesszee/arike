/**
 * GET /api/balance
 *   - default: ARIKE's unified USDC balance across chains
 *   - ?address=0x...&chain=Base_Sepolia : real ERC20 balanceOf on that
 *     specific testnet chain (absorbed from the old standalone
 *     /api/chain-balance endpoint, to stay under Vercel's Hobby-plan
 *     serverless function limit)
 *
 * USDC testnet contract addresses verified against Circle's own skills repo:
 * https://github.com/circlefin/skills/blob/master/plugins/circle/skills/use-usdc/SKILL.md
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getUnifiedBalance } from "../src/lib/unifiedBalance.js";
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
  const address = req.query.address as string | undefined;
  const chainKey = req.query.chain as keyof typeof CHAINS | undefined;

  // Per-chain mode
  if (address && chainKey) {
    if (!CHAINS[chainKey]) {
      res.status(400).json({ ok: false, error: "Invalid chain" });
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
      const balanceUsdc = (Number(balance) / 1_000_000).toFixed(6);
      res.status(200).json({ ok: true, balanceUsdc, chain: chainKey });
    } catch (err: any) {
      res.status(500).json({ ok: false, error: err.message });
    }
    return;
  }

  // Default: unified USDC balance
  try {
    const result = await getUnifiedBalance();
    res.status(200).json({ ok: true, result });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err.message });
  }
}
