/**
 * GET /api/config
 * Exposes public, non-sensitive config to the browser — App IDs and wallet
 * addresses are meant to be public (an address alone can't move funds).
 * Never expose CIRCLE_API_KEY or CIRCLE_ENTITY_SECRET here.
 *
 * Resolves the agent wallet's actual 0x address from its Circle wallet ID
 * server-side, rather than assuming an env var holds the address directly —
 * ARIKE_DEMO_WALLET_ID is the Circle-internal wallet ID (a UUID), not the
 * onchain address itself.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const response: { circleAppId: string | null; agentWalletAddress: string | null } = {
    circleAppId: process.env.ARIKE_CIRCLE_APP_ID || null,
    agentWalletAddress: null,
  };

  const walletId = process.env.ARIKE_DEMO_WALLET_ID;
  if (walletId && process.env.CIRCLE_API_KEY && process.env.CIRCLE_ENTITY_SECRET) {
    try {
      const client = initiateDeveloperControlledWalletsClient({
        apiKey: process.env.CIRCLE_API_KEY,
        entitySecret: process.env.CIRCLE_ENTITY_SECRET,
      });
      const wallet = await client.getWallet({ id: walletId });
      response.agentWalletAddress = wallet.data?.wallet?.address ?? null;
    } catch {
      // Leave agentWalletAddress null — the frontend handles this gracefully.
    }
  }

  res.status(200).json(response);
}
