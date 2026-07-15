# ARIKE — Circle Setup Walkthrough

Everything below runs on **your machine** (Windows, per your setup), not in any
sandbox — several steps need your email inbox for OTP verification, which
only you can complete.

Verified against Circle's docs, July 2026.

---

## 0. Prerequisites

- Node.js v20.18.2+
- A Circle account (console.circle.com)

```powershell
npm install -g @circle-fin/cli
```

---

## 1. Agent Wallets — authenticate + create your wallet

```powershell
circle wallet login you@example.com --testnet
```

- First run prompts you to accept Circle's Terms of Use, then sends a one-time
  password to your email.
- Agent wallets are created automatically on all supported chains once you
  authenticate.
- Sessions expire after 7 days; testnet and mainnet sessions are stored
  separately.

**If you want to script this instead of typing interactively** (useful for
CI or letting an agent do it):
```powershell
circle wallet login you@example.com --init
# returns a request-id, stored at ~/.circle/login-requests/<id>.json (expires in 10 min)
circle wallet login --request <request-id> --otp <code-from-email>
```

Get your wallet address:
```powershell
circle wallet list --type agent --chain BASE
```

Fund it — on Arc Testnet specifically, omit `--method`/`--amount` for free faucet USDC:
```powershell
circle wallet fund --address 0xYourWalletAddress --chain BASE
```

Check balance:
```powershell
circle wallet balance --address 0xYourWalletAddress --chain BASE
```

---

## 2. Nanopayments / Gateway — deposit + pay for services

Deposit into your Gateway balance (this is what Nanopayments draw from):
```powershell
circle gateway deposit --amount 5 --address 0xYourWalletAddress --chain BASE --method direct
```

Discover services on the Circle Agent Marketplace:
```powershell
circle services search "weather"
circle services inspect https://api.example.com/weather
```

Pay for one:
```powershell
circle services pay https://api.example.com/weather --address 0xYourWalletAddress --chain BASE --max-amount 0.01
```

Check remaining Gateway balance:
```powershell
circle gateway balance --address 0xYourWalletAddress --chain BASE
```

This is exactly what `src/consumer/agent.ts` in this repo automates — it
decides what to search for, inspects terms, and pays, without you typing
each command by hand.

---

## 3. Circle Contracts — deploy ARIKE's onchain Directory + Ledger

You need a **developer-controlled wallet** (separate from your agent wallet)
to pay gas for contract deployment, plus API credentials from the Console.

1. In [Circle Console](https://console.circle.com), create an API key and
   register an Entity Secret. **Never commit these** — they go in `.env`
   (already gitignored).
2. Create a dev-controlled wallet on `ARC-TESTNET` (see
   [Dev-Controlled Wallets overview](https://developers.circle.com/wallets/dev-controlled))
   and fund it with testnet USDC — Arc uses USDC as gas, so this wallet needs
   a balance to pay for the deploy transaction.
3. Add to `.env`:
   ```
   CIRCLE_API_KEY=
   CIRCLE_ENTITY_SECRET=
   ARIKE_DEPLOYER_WALLET_ID=
   ```
4. Compile and deploy (both already written in this repo):
   ```powershell
   node scripts/compile.js
   node scripts/deploy-contracts.js
   ```

This deploys `ArikeDirectory` (service registry) and `ArikeLedger`
(settlement log) using the exact same SDK pattern as Circle's own Arc
Testnet quickstart.

**Arc network facts worth knowing:**
- Chain ID: `5042002`
- RPC: `https://rpc.testnet.arc.network`
- Faucet: `https://faucet.circle.com`
- **Decimals gotcha:** native gas amounts use 18 decimals (like ETH elsewhere);
  ERC-20 USDC amounts use 6 decimals. Mixing these up silently produces wrong
  amounts — this trips up almost everyone the first time.

---

## 3b. Make the public "Trigger agent purchase" button real

The deployed console (`arike-six.vercel.app` or similar) has a button that
calls `/api/simulate`, which submits a real transaction to
`ArikeLedger.recordSettlement()` — an actual onchain action on Arc Testnet,
safe to expose publicly since it's worthless testnet USDC.

To turn this on, set these in **Vercel → your project → Settings →
Environment Variables** (not just your local `.env` — Vercel doesn't read that file):

```
CIRCLE_API_KEY=
CIRCLE_ENTITY_SECRET=
ARIKE_DEMO_WALLET_ID=        # a SEPARATE, dedicated wallet — see note below
ARIKE_LEDGER_ADDRESS=        # from npm run deploy:contracts
```

**Use a dedicated wallet for `ARIKE_DEMO_WALLET_ID`**, different from
whatever wallet you used to deploy the contracts. Every public click spends
its gas. It's testnet USDC — free and instantly refillable from
`faucet.circle.com` — but keeping it separate means a burst of demo traffic
never affects your own deploy/dev wallet.

Until all four vars are set, the button gracefully falls back to an
illustrative (clearly-labeled, non-onchain) animation instead of erroring.



## 4. CCTP V2 — let a provider on another chain get paid in USDC on Arc

Now wired into `src/lib/bridge.ts`, using CCTP V2 via Circle's Bridge Kit.
It operates through your **existing Circle-managed wallet** (same
`CIRCLE_API_KEY`/`CIRCLE_ENTITY_SECRET` as everything else) — no raw
private key needed anywhere in ARIKE.

CCTP V2 is the current standard (V1 is legacy, phasing out July 31, 2026).

Try it:
```
npm run try:bridge -- --address=0xYourWalletAddress --amount=5.00 --from=Base_Sepolia
```
Note: your wallet needs a small USDC balance on the **source** chain
(e.g. Base Sepolia) — the Arc faucet only funds you on Arc itself. Get
Base Sepolia testnet USDC from Circle's faucet, selecting Base Sepolia as
the network.

---

## 4b. Swap — exchange USDC/EURC on the same chain

Wired into `src/lib/swap.ts` via Circle's Swap Kit. Arc Testnet is one of
the only testnets Swap supports (USDC, EURC, and cirBTC).

Requires one more credential beyond your API key — a free **Kit Key**:
1. Circle Console → find the Swap/App Kit section → generate a Kit Key
2. Add to `.env`: `CIRCLE_KIT_KEY=...`

Try it:
```
npm run try:swap -- --address=0xYourWalletAddress --amount=1.00 --from=USDC --to=EURC
```

---

## 4c. Send — direct wallet-to-wallet transfer

Wired into `src/lib/send.ts` via the full App Kit's Send capability
(`@circle-fin/app-kit`). No Kit Key needed for this one — only Swap
requires it.

Try it:
```
npm run try:send -- --from=0xYourWallet --to=0xRecipient --amount=1.00
```

---

## 4d. Unified Balance — one balance, spendable on any chain

Wired into `src/lib/unifiedBalance.ts`. Deposit USDC from any supported
chain into a single Gateway balance, then spend (mint) it on whichever
chain an agent needs it — no manual per-transfer bridging. This is the
same balance Nanopayments draw from.

Try it:
```
npm run try:balance -- deposit --chain=Base_Sepolia --address=0xYourWallet --amount=5.00
npm run try:balance -- spend --to=Arc_Testnet --address=0xYourWallet --amount=2.00
npm run try:balance -- check
```

---

## 5. Paymaster — remove native-gas friction

Circle Paymaster support was expanded to Arc Testnet, letting either agent
pay gas in USDC directly rather than needing a separate native-gas balance.
Worth wiring into the provider service once the core payment flow is proven —
lower priority than Contracts/CCTP for your first working demo.

---

## 6. StableFX — flagging honestly, not building it

StableFX (onchain FX between stablecoins) currently requires **institutional
KYB/AML approval** — it's not something a solo hackathon team can self-serve
into in four weeks. Mention it in your pitch as a natural future extension
(e.g. "a provider agent could settle in EURC via StableFX"), but don't spend
build time trying to integrate it live. Being upfront about this in your deck
reads as informed, not incomplete.

---

## 7. Circle Skills — better AI-assisted accuracy while you build

Circle publishes AI coding skills that encode correct patterns (CCTP vs
Gateway, USDC's 6-decimal rule, approve-then-deposit flows, etc.) so tools
like Claude Code make fewer mistakes:

```powershell
circle skill install --tool claude-code
```

---

## Checklist against the hackathon's required tool list

| Tool | Status |
|---|---|
| Agent Wallets | Step 1 — do this first |
| Nanopayments (x402) | Step 2 — already scaffolded in `src/consumer/agent.ts` |
| Contracts | Step 3 — `ArikeDirectory` + `ArikeLedger` ready to deploy |
| Gateway | Step 2 — same balance Nanopayments draw from |
| CCTP V2 (Bridge) | Step 4 — wired in `src/lib/bridge.ts`, try with `npm run try:bridge` |
| Swap (App Kit) | Step 4b — wired in `src/lib/swap.ts`, try with `npm run try:swap` |
| Send (App Kit) | Step 4c — wired in `src/lib/send.ts`, try with `npm run try:send` |
| Unified Balance (App Kit) | Step 4d — wired in `src/lib/unifiedBalance.ts`, try with `npm run try:balance` |
| Paymaster | Step 5 — planned, not yet wired |
| StableFX | Institutional-gated — pitch only, not built |
