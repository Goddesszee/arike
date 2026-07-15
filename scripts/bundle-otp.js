/**
 * Bundles src/console/otp-client.ts into a plain browser <script> file,
 * since the ARIKE Console is static HTML (no React/Next bundler) but
 * @circle-fin/w3s-pw-web-sdk is an npm-only package.
 *
 * Run: node scripts/bundle-otp.js (also runs automatically as `npm run build`,
 * which Vercel invokes before every deploy)
 */
import * as esbuild from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";
import fs from "node:fs";

async function main() {
  await esbuild.build({
    entryPoints: ["src/console/otp-client.ts"],
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "es2020",
    outfile: "otp-bundle.js",
    logLevel: "info",
    plugins: [polyfillNode()],
  });

  // Keep local dev copy in sync too
  fs.copyFileSync("otp-bundle.js", "src/console/public/otp-bundle.js");
  console.log("Bundled otp-client.ts -> otp-bundle.js (root + src/console/public/)");
}

main().catch((err) => {
  console.error("Bundle failed:", err);
  process.exit(1);
});
