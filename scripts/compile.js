/**
 * Compiles ARIKE's contracts with solc and writes ABI + bytecode JSON files
 * that scripts/deploy-contracts.ts feeds directly into Circle Contracts.
 *
 * Run: node scripts/compile.js
 */
import solc from "solc";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CONTRACTS_DIR = fileURLToPath(new URL("../contracts", import.meta.url));
const OUT_DIR = fileURLToPath(new URL("../build", import.meta.url));

const contractFiles = ["ArikeDirectory.sol", "ArikeLedger.sol"];

function compile(fileName) {
  const filePath = path.join(CONTRACTS_DIR, fileName);
  const source = fs.readFileSync(filePath, "utf8");

  const input = {
    language: "Solidity",
    sources: { [fileName]: { content: source } },
    settings: {
      outputSelection: { "*": { "*": ["abi", "evm.bytecode.object"] } },
      optimizer: { enabled: true, runs: 200 },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  if (output.errors) {
    const fatal = output.errors.filter((e) => e.severity === "error");
    for (const e of output.errors) console.log(e.formattedMessage);
    if (fatal.length) throw new Error(`Compilation failed for ${fileName}`);
  }

  const contractName = fileName.replace(".sol", "");
  const compiled = output.contracts[fileName][contractName];

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  fs.writeFileSync(
    path.join(OUT_DIR, `${contractName}.json`),
    JSON.stringify(
      { abi: compiled.abi, bytecode: "0x" + compiled.evm.bytecode.object },
      null,
      2
    )
  );

  console.log(`Compiled ${contractName} -> build/${contractName}.json`);
}

for (const file of contractFiles) compile(file);
