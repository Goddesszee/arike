# ARIKE

An agent-to-agent data marketplace on Arc. Agents discover, evaluate, and pay
other agents for data via Circle Nanopayments (x402) — no human approves any
individual payment.

Built for the [Encode Build on Arc hackathon](https://www.encodeclub.com/programmes/arc-hackathon).

## What's in this repo

- **`src/consumer/agent.ts`** — the demo centerpiece. Given a goal, this agent
  decides what data it needs, searches the Circle Agent Marketplace, pays for
  services via Nanopayments, and synthesizes a recommendation. Fully
  autonomous — no human clicks approve on any payment.
- **`src/provider/server.ts`** — ARIKE's own contribution to the marketplace:
  a live Port Congestion Index, priced per-call, payable via x402.
- **`src/lib/circle-tools.ts`** — thin wrapper around the real Circle CLI
  (wallets, gateway, services/nanopayments). Has a `--mock` mode so you can
  build/demo the orchestration logic before your wallet is funded.

## Setup

1. Copy env template:
   ```
   cp .env.example .env
   ```
   Fill in `ANTHROPIC_API_KEY`. Leave `MOCK=true` until your Circle wallet is set up.

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your real Circle agent wallet (once, per Circle's docs — see
   `CIRCLE_SETUP.md` for the full walkthrough):
   ```
   npm install -g @circle-fin/cli
   circle wallet login you@example.com --testnet
   circle wallet list --type agent --chain BASE
   circle wallet fund --address 0xYourWalletAddress --chain BASE   # free faucet USDC on Arc Testnet
   circle gateway deposit --amount 5 --address 0xYourWalletAddress --chain BASE --method direct
   ```
   Then set `MOCK=false` in `.env`.

## Run the demo

Mock mode (no live wallet needed, good for building UI/logic first):
```
npm run consumer:mock
```

Real mode (once your wallet + gateway balance are set up):
```
npm run consumer
```

ARIKE's own provider service (separate terminal):
```
npm run provider
```

ARIKE Console — live dashboard of the agent-to-agent transaction feed (separate terminal):
```
npm run console
```
Open http://localhost:4022. Runs in mock/demo mode until `ARIKE_LEDGER_ADDRESS`
is set (after `npm run deploy:contracts`), then reads live settlements from Arc.

## Deploy the onchain contracts

```
npm run compile          # compiles ArikeDirectory.sol + ArikeLedger.sol with solc
npm run deploy:contracts # deploys both to Arc Testnet via Circle Contracts
```
Requires `CIRCLE_API_KEY`, `CIRCLE_ENTITY_SECRET`, and `ARIKE_DEPLOYER_WALLET_ID`
in `.env` — see `CIRCLE_SETUP.md` for how to get these.

## Architecture

```
                      ┌─────────────────────────┐
                      │   ARIKE Consumer Agent   │
                      │  (goal → topics → buy →  │
                      │      synthesize)         │
                      └───────────┬─────────────┘
                                  │ circle services search/inspect/pay
                                  ▼
                      ┌─────────────────────────┐
                      │  Circle Agent Marketplace│
                      │   (agents.circle.com)    │
                      └───────────┬─────────────┘
                     ┌────────────┼────────────┐
                     ▼            ▼            ▼
              Port Congestion  FX Oracle   Weather Risk
              Index (ARIKE)    (3rd party) (3rd party)
                     │
                     ▼ recordSettlement()
              ┌─────────────────┐        ┌────────────────┐
              │  ArikeLedger    │───────▶│  ARIKE Console  │
              │  (Arc Testnet)  │  reads │  (live dashboard)│
              └─────────────────┘        └────────────────┘

  ArikeDirectory (Arc Testnet) — onchain service registry, providers list here too

  CCTP Bridge (src/lib/bridge.ts) — consumer/provider agents on Base, Ethereum,
  or Avalanche testnets can consolidate USDC onto Arc before/after transacting

  Paymaster (src/lib/paymaster.ts) — Base-side only: lets a provider agent's
  smart account pay gas in USDC instead of ETH when it isn't operating on Arc directly
```

Every payment settles via Circle Gateway / Nanopayments (x402) on top of Arc.
Wallets are Circle Agent Wallets — no human key management on either side.

## Circle tools used

| Tool | Role in ARIKE | Where |
|---|---|---|
| Agent Wallets | Every agent (consumer + provider) holds one, no human custody | Circle CLI, set up per `CIRCLE_SETUP.md` |
| Nanopayments / x402 | The actual per-call payment rail between agents | `src/consumer/agent.ts`, `src/provider/server.ts` |
| Gateway | Unified USDC balance the consumer agent draws from | `src/lib/circle-tools.ts` |
| Circle Agent Marketplace | Discovery layer — where ARIKE lists its own service and finds others | `circle services search/inspect/pay` |
| Circle Contracts | Onchain service directory + settlement ledger | `contracts/*.sol`, `scripts/deploy-contracts.js` |
| CCTP V2 | Lets an agent on another chain consolidate USDC onto Arc | `src/lib/bridge.ts`, try with `npm run try:bridge` |
| Swap (App Kit) | Same-chain USDC<->EURC exchange on Arc | `src/lib/swap.ts`, try with `npm run try:swap` |
| Paymaster | Base-side gas-in-USDC for provider agents not living on Arc | `src/lib/paymaster.ts` |
| StableFX | Institutional KYB/AML-gated — mentioned in pitch as roadmap, not built | — |

All of Bridge, Swap, Contracts, and the consumer/provider agents operate
through the same Circle-managed wallet (via `CIRCLE_API_KEY` +
`CIRCLE_ENTITY_SECRET`) — no raw private key exists anywhere in this codebase.

See `CIRCLE_SETUP.md` for the complete, verified setup walkthrough for every tool above.

## TODO before final submission (Aug 9)

- [ ] Wire real x402 payment verification in `provider/server.ts` (currently
      accepts any non-empty `X-PAYMENT` header — fine for demo, not for real use)
- [ ] Deploy provider service publicly (tunnel or hosted) and register on
      the Circle Agent Marketplace
- [ ] Wire consumer/provider agents to actually call `ArikeLedger.recordSettlement()`
      after each Nanopayment clears, so the Console shows real data
- [ ] Record 3-minute demo video
