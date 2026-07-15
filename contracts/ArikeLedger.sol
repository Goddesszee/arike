// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.24;

/// @title ARIKE Ledger
/// @notice Append-only log of agent-to-agent payments. The actual USDC
/// settlement happens via Circle Nanopayments (x402) off this contract's
/// critical path; ARIKE's consumer/provider agents call `recordSettlement`
/// immediately after a Nanopayment clears so there is a permanent, auditable,
/// onchain record — this is what the ARIKE Console dashboard reads from.
contract ArikeLedger {
    struct Settlement {
        address consumer;
        address provider;
        uint256 serviceId;   // corresponds to ArikeDirectory.services index
        uint256 amountMicroUsdc;
        uint256 timestamp;
    }

    Settlement[] public settlements;

    event SettlementRecorded(
        uint256 indexed settlementId,
        address indexed consumer,
        address indexed provider,
        uint256 serviceId,
        uint256 amountMicroUsdc
    );

    function recordSettlement(
        address provider,
        uint256 serviceId,
        uint256 amountMicroUsdc
    ) external returns (uint256 settlementId) {
        require(provider != address(0), "ArikeLedger: invalid provider");
        require(amountMicroUsdc > 0, "ArikeLedger: amount must be > 0");

        settlements.push(Settlement({
            consumer: msg.sender,
            provider: provider,
            serviceId: serviceId,
            amountMicroUsdc: amountMicroUsdc,
            timestamp: block.timestamp
        }));

        settlementId = settlements.length - 1;
        emit SettlementRecorded(settlementId, msg.sender, provider, serviceId, amountMicroUsdc);
    }

    function settlementCount() external view returns (uint256) {
        return settlements.length;
    }

    /// @notice Total USDC (micro-units) a given provider has been paid.
    function totalEarnedBy(address provider) external view returns (uint256 total) {
        for (uint256 i = 0; i < settlements.length; i++) {
            if (settlements[i].provider == provider) {
                total += settlements[i].amountMicroUsdc;
            }
        }
    }
}
