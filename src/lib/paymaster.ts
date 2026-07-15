/**
 * ARIKE Paymaster (Base-side gas-in-USDC)
 * ------------------------------------------
 * IMPORTANT SCOPE NOTE: Arc itself doesn't need this — Arc already uses
 * USDC as its native gas token, so there's no ETH-vs-USDC mismatch to solve
 * there. Circle Paymaster earns its place in ARIKE specifically for
 * provider agents that operate on Base (or another ERC-4337 chain) and
 * need to submit a transaction (e.g. registering with ARIKE, or an
 * onchain acknowledgment) without holding ETH for gas.
 *
 * This wires a smart account + Pimlico bundler + Circle Paymaster contract
 * on Base Sepolia. Circle Paymaster is permissionless — no Circle account
 * or API key needed, just the deployed contract address.
 *
 * Docs: https://developers.circle.com/paymaster
 */
import "dotenv/config";
import { createPublicClient, http, type Address } from "viem";
import { baseSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { createSmartAccountClient } from "permissionless";
import { toSafeSmartAccount } from "permissionless/accounts";
import { createPimlicoClient } from "permissionless/clients/pimlico";

// Circle Paymaster contract address on Base Sepolia (testnet), per Circle's docs.
const CIRCLE_PAYMASTER_BASE_SEPOLIA: Address = "0x31BE08D380A21fc740883c0BC434FcFc88740b58";

export interface PaymasterGasParams {
  privateKey: `0x${string}`;
  pimlicoApiKey: string;
  calls: { to: Address; data: `0x${string}`; value?: bigint }[];
}

/**
 * Submits a transaction from a provider agent's Base Sepolia smart account,
 * with gas paid in USDC via Circle Paymaster instead of ETH.
 */
export async function sendGaslessUsdcTransaction({
  privateKey,
  pimlicoApiKey,
  calls,
}: PaymasterGasParams) {
  const publicClient = createPublicClient({ chain: baseSepolia, transport: http() });
  const owner = privateKeyToAccount(privateKey);

  const account = await toSafeSmartAccount({
    client: publicClient,
    owners: [owner],
    version: "1.4.1",
  });

  const pimlicoUrl = `https://api.pimlico.io/v2/base-sepolia/rpc?apikey=${pimlicoApiKey}`;
  const pimlicoClient = createPimlicoClient({ transport: http(pimlicoUrl) });

  const smartAccountClient = createSmartAccountClient({
    account,
    chain: baseSepolia,
    bundlerTransport: http(pimlicoUrl),
    paymaster: pimlicoClient,
    paymasterContext: {
      // Tells the bundler to route gas sponsorship through Circle's ERC-20
      // (USDC) paymaster rather than a native-token paymaster.
      token: "USDC",
      paymasterAddress: CIRCLE_PAYMASTER_BASE_SEPOLIA,
    },
    userOperation: {
      estimateFeesPerGas: async () => (await pimlicoClient.getUserOperationGasPrice()).fast,
    },
  });

  console.log(`Smart account address: ${account.address}`);
  console.log(`Submitting ${calls.length} call(s), gas paid in USDC via Circle Paymaster...`);

  const userOpHash = await smartAccountClient.sendUserOperation({ calls });
  console.log(`UserOperation submitted: ${userOpHash}`);

  const receipt = await pimlicoClient.waitForUserOperationReceipt({ hash: userOpHash });
  console.log(`Confirmed in tx: ${receipt.receipt.transactionHash}`);

  return receipt;
}

export const CIRCLE_PAYMASTER_ADDRESSES = {
  baseSepolia: CIRCLE_PAYMASTER_BASE_SEPOLIA,
  // Arbitrum Sepolia uses the same address per Circle's docs (same contract, multi-chain deploy)
  arbitrumSepolia: "0x31BE08D380A21fc740883c0BC434FcFc88740b58" as Address,
};
