/**
 * Creates a new Circle Developer-Controlled Wallet Set + Wallet on Arc
 * Testnet for ARIKE — since the Console UI doesn't have a "Create Wallet"
 * button, this is the actual way wallets get created (same as your NAN
 * wallets were).
 *
 * Run: node scripts/create-wallet.js
 *
 * Requires CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET in .env.
 */
import "dotenv/config";
import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";

const API_KEY = process.env.CIRCLE_API_KEY;
const ENTITY_SECRET = process.env.CIRCLE_ENTITY_SECRET;

if (!API_KEY || !ENTITY_SECRET) {
  throw new Error("Set CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET in .env first.");
}

const client = initiateDeveloperControlledWalletsClient({
  apiKey: API_KEY,
  entitySecret: ENTITY_SECRET,
});

async function main() {
  console.log("Creating wallet set...");
  const walletSetResponse = await client.createWalletSet({ name: "arike" });
  const walletSet = walletSetResponse.data?.walletSet;
  if (!walletSet?.id) throw new Error("Wallet set creation failed: no ID returned");
  console.log(`Wallet set created: ${walletSet.id}`);

  console.log("Creating wallet on Arc Testnet...");
  const walletResponse = await client.createWallets({
    walletSetId: walletSet.id,
    blockchains: ["ARC-TESTNET"],
    count: 1,
    accountType: "EOA", // matches your existing NAN wallets — simplest choice
  });

  const wallet = walletResponse.data?.wallets?.[0];
  if (!wallet) throw new Error("Wallet creation failed: no wallet returned");

  console.log("\n--- Save these ---");
  console.log(`Wallet Set ID:  ${walletSet.id}`);
  console.log(`Wallet ID:      ${wallet.id}`);
  console.log(`Wallet Address: ${wallet.address}`);
  console.log(`Blockchain:     ${wallet.blockchain}`);
  console.log("\nNext steps:");
  console.log(`1. Fund it: go to faucet.circle.com, select Arc Testnet, paste ${wallet.address}`);
  console.log(`2. Add to .env: ARIKE_DEPLOYER_WALLET_ID=${wallet.id}`);
  console.log(`3. Add to Vercel env vars: ARIKE_DEMO_WALLET_ID=${wallet.id}`);
  console.log(`4. Add to Vercel env vars: ARIKE_WALLET_SET_ID=${walletSet.id} — enables the "Log in" flow on the Console (creates a wallet per email under this set)`);
}

main().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
