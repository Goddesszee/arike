// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.24;

/// @title ARIKE Directory
/// @notice Onchain registry of agent-to-agent data services. Provider agents
/// list a service here; consumer agents read it before paying via Nanopayments.
/// This is a lightweight, auditable complement to Circle's own Agent
/// Marketplace (agents.circle.com/services) — ARIKE lists its services in
/// both places, but keeps a permanent onchain record here for transparency.
contract ArikeDirectory {
    struct Service {
        address provider;
        string name;
        string endpointUrl;
        uint256 priceMicroUsdc; // price per call, in USDC's 6-decimal units
        bool active;
    }

    Service[] public services;

    event ServiceRegistered(uint256 indexed serviceId, address indexed provider, string name, uint256 priceMicroUsdc);
    event ServiceDeactivated(uint256 indexed serviceId);
    event ServicePriceUpdated(uint256 indexed serviceId, uint256 newPriceMicroUsdc);

    modifier onlyProvider(uint256 serviceId) {
        require(serviceId < services.length, "ArikeDirectory: unknown service");
        require(services[serviceId].provider == msg.sender, "ArikeDirectory: not the provider");
        _;
    }

    function registerService(
        string calldata name,
        string calldata endpointUrl,
        uint256 priceMicroUsdc
    ) external returns (uint256 serviceId) {
        require(bytes(name).length > 0, "ArikeDirectory: name required");
        require(bytes(endpointUrl).length > 0, "ArikeDirectory: endpointUrl required");
        require(priceMicroUsdc > 0, "ArikeDirectory: price must be > 0");

        services.push(Service({
            provider: msg.sender,
            name: name,
            endpointUrl: endpointUrl,
            priceMicroUsdc: priceMicroUsdc,
            active: true
        }));

        serviceId = services.length - 1;
        emit ServiceRegistered(serviceId, msg.sender, name, priceMicroUsdc);
    }

    function updatePrice(uint256 serviceId, uint256 newPriceMicroUsdc) external onlyProvider(serviceId) {
        require(newPriceMicroUsdc > 0, "ArikeDirectory: price must be > 0");
        services[serviceId].priceMicroUsdc = newPriceMicroUsdc;
        emit ServicePriceUpdated(serviceId, newPriceMicroUsdc);
    }

    function deactivateService(uint256 serviceId) external onlyProvider(serviceId) {
        services[serviceId].active = false;
        emit ServiceDeactivated(serviceId);
    }

    function serviceCount() external view returns (uint256) {
        return services.length;
    }

    function getActiveServices() external view returns (Service[] memory active) {
        uint256 count;
        for (uint256 i = 0; i < services.length; i++) {
            if (services[i].active) count++;
        }
        active = new Service[](count);
        uint256 j;
        for (uint256 i = 0; i < services.length; i++) {
            if (services[i].active) {
                active[j] = services[i];
                j++;
            }
        }
    }
}
