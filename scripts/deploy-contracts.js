/**
 * ARIKE contract deployment via Circle Contracts.
 * Uses @circle-fin/smart-contract-platform and @circle-fin/developer-controlled-wallets
 * exactly per Circle's Arc Testnet quickstart:
 *   https://developers.circle.com/contracts/scp-deploy-smart-contract
 *
 * Requires (put in .env, see .env.example):
 *   CIRCLE_API_KEY           - from Circle Console
 *   CIRCLE_ENTITY_SECRET     - registered Entity Secret
 *
 * Run: node scripts/deploy-contracts.js
 */
import "dotenv/config";
import fs from "node:fs";
import crypto from "node:crypto";
import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";
import { initiateSmartContractPlatformClient } from "@circle-fin/smart-contract-platform";

const API_KEY = process.env.CIRCLE_API_KEY;
const ENTITY_SECRET = process.env.CIRCLE_ENTITY_SECRET;
const WALLET_ID = process.env.ARIKE_DEPLOYER_WALLET_ID; // dev-controlled wallet on ARC-TESTNET

if (!API_KEY || !ENTITY_SECRET) {
  throw new Error("Set CIRCLE_API_KEY and CIRCLE_ENTITY_SECRET in .env first.");
}
if (!WALLET_ID) {
  throw new Error(
    "Set ARIKE_DEPLOYER_WALLET_ID in .env — create a dev-controlled wallet on ARC-TESTNET " +
      "first and fund it with testnet USDC (it pays gas for the deploy)."
  );
}

const walletsClient = initiateDeveloperControlledWalletsClient({
  apiKey: API_KEY,
  entitySecret: ENTITY_SECRET,
});

const contractsClient = initiateSmartContractPlatformClient({
  apiKey: API_KEY,
  entitySecret: ENTITY_SECRET,
});

function loadBuild(name) {
  return JSON.parse(fs.readFileSync(new URL(`../build/${name}.json`, import.meta.url)));
}

async function deploy(name, constructorParameters = []) {
  const { abi, bytecode } = loadBuild(name);

  console.log(`Deploying ${name} to Arc Testnet...`);
  const response = await contractsClient.deployContract({
    name: name, // must be alphanumeric [a-zA-Z0-9] per Circle's API — no spaces/hyphens
    description: `ARIKE agent-to-agent marketplace — ${name}`,
    blockchain: "ARC-TESTNET",
    walletId: WALLET_ID,
    abiJson: JSON.stringify(abi, null, 2),
    bytecode,
    constructorParameters,
    fee: { type: "level", config: { feeLevel: "MEDIUM" } },
    idempotencyKey: crypto.randomUUID(),
  });

  console.log(`${name} deploy submitted:`, response.data);
  return response.data;
}

async function main() {
  // ArikeDirectory and ArikeLedger both have empty constructors — no
  // constructorParameters needed. Add them here if you extend the contracts.
  const directory = await deploy("ArikeDirectory");
  const ledger = await deploy("ArikeLedger");

  console.log("\nSave these contract IDs — you'll need them for the console dashboard:");
  console.log({ directory, ledger });
}

main().catch((err) => {
  console.error("Deployment failed:", err.message);
  // Circle's SDK error often carries the real validation detail in
  // non-enumerable properties that a plain console.error/JSON.stringify
  // misses — dump everything so we can see the actual rejected field.
  console.error("Full error detail:", JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
  if (err.response) {
    console.error("Response data:", JSON.stringify(err.response.data ?? err.response, null, 2));
  }
  process.exit(1);
});
