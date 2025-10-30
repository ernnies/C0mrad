// InsurancePool.sol
pragma solidity ^0.8.24;

contract InsurancePool {
    struct Policy {
        address insured;
        uint256 premium;
        uint256 coverage;
        uint256 expiresAt;
        bool active;
    }

    mapping(uint256 => Policy) public policies;
    uint256 public policyCount;
    uint256 public totalPremiums;

    event PolicyPurchased(uint256 id, address insured, uint256 coverage);

    function buyPolicy(uint256 coverage, uint256 duration) external payable {
        require(msg.value >= coverage / 100, "Premium too low"); // 1% premium
        uint256 id = ++policyCount;
        policies[id] = Policy({
            insured: msg.sender,
            premium: msg.value,
            coverage: coverage,
            expiresAt: block.timestamp + duration,
            active: true
        });
        totalPremiums += msg.value;
        emit PolicyPurchased(id, msg.sender, coverage);
    }
}