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
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    alias: {
      // jsonwebtoken/jws only serve the SDK's social-login (Google/Apple)
      // JWT parsing path, which ARIKE's email-OTP-only flow never calls —
      // and the real package crashes when polyfilled for browsers
      // (Object.create on an undefined prototype from Node's stream/util
      // internals). Stub it out entirely rather than fight the polyfill.
      jsonwebtoken: path.join(__dirname, "stub-jsonwebtoken.js"),
    },
  });

  // Keep local dev copy in sync too
  fs.copyFileSync("otp-bundle.js", "src/console/public/otp-bundle.js");
  console.log("Bundled otp-client.ts -> otp-bundle.js (root + src/console/public/)");
}

main().catch((err) => {
  console.error("Bundle failed:", err);
  process.exit(1);
});
