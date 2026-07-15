/**
 * Raw diagnostic: bypasses the SDK entirely to show Circle's actual,
 * complete response body for the contract deploy call — the SDK's error
 * wrapper may be dropping the per-field `errors[]` array Circle's docs
 * say validation errors should include.
 *
 * Run: node scripts/debug-deploy-raw.js
 */
import "dotenv/config";
import crypto from "node:crypto";
import fs from "node:fs";

const API_KEY = process.env.CIRCLE_API_KEY;
const ENTITY_SECRET = process.env.CIRCLE_ENTITY_SECRET; // 64-char hex string
const WALLET_ID = process.env.ARIKE_DEPLOYER_WALLET_ID;

if (!API_KEY || !ENTITY_SECRET || !WALLET_ID) {
  throw new Error("Set CIRCLE_API_KEY, CIRCLE_ENTITY_SECRET, ARIKE_DEPLOYER_WALLET_ID in .env first.");
}

async function getPublicKey() {
  const res = await fetch("https://api.circle.com/v1/w3s/config/entity/publicKey", {
    headers: { Authorization: `Bearer ${API_KEY}`, Accept: "application/json" },
  });
  const body = await res.json();
  console.log("Public key fetch status:", res.status);
  if (!res.ok) {
    console.log(JSON.stringify(body, null, 2));
    throw new Error("Could not fetch entity public key");
  }
  return body.data.publicKey;
}

function encryptEntitySecret(publicKeyPem, entitySecretHex) {
  const buffer = Buffer.from(entitySecretHex, "hex");
  const encrypted = crypto.publicEncrypt(
    { key: publicKeyPem, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: "sha256" },
    buffer
  );
  return encrypted.toString("base64");
}

async function main() {
  const publicKey = await getPublicKey();
  const entitySecretCiphertext = encryptEntitySecret(publicKey, ENTITY_SECRET);

  const { abi, bytecode } = JSON.parse(fs.readFileSync(new URL("../build/ArikeDirectory.json", import.meta.url)));

  const body = {
    idempotencyKey: crypto.randomUUID(),
    blockchain: "ARC-TESTNET",
    entitySecretCiphertext,
    walletId: WALLET_ID,
    name: "ArikeDirectory",
    description: "ARIKE agent-to-agent marketplace - ArikeDirectory",
    abiJson: JSON.stringify(abi),
    bytecode,
    constructorParameters: [],
    feeLevel: "MEDIUM",
  };

  console.log("\nRequest body (entitySecretCiphertext truncated for readability):");
  console.log(JSON.stringify({ ...body, entitySecretCiphertext: entitySecretCiphertext.slice(0, 20) + "..." }, null, 2));

  const res = await fetch("https://api.circle.com/v1/w3s/contracts/deploy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const responseBody = await res.json();
  console.log("\n--- Circle's raw response ---");
  console.log("HTTP status:", res.status);
  console.log(JSON.stringify(responseBody, null, 2));
}

main().catch((err) => {
  console.error("Diagnostic failed:", err.message);
  process.exit(1);
});
