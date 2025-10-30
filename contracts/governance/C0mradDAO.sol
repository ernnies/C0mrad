// C0mradDAO.sol
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";

contract C0mradDAO is 
    Governor, 
    GovernorSettings, 
    GovernorCountingSimple, 
    GovernorVotes, 
    GovernorVotesQuorumFraction 
{
    constructor(IVotes _token)
        Governor("C0mradDAO")
        GovernorSettings(1, /* 1 block */ 45818, /* ~1 week */ 0)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4)
    {}

    function proposeTemplate(string memory name, string[] memory steps) public returns (uint256) {
        string memory description = string(abi.encodePacked("Add template: ", name));
        address[] memory targets = new address[](1);
        uint256[] memory values = new uint256[](1);
        bytes[] memory calldatas = new bytes[](1);
        targets[0] = address(this);
        calldatas[0] = abi.encodeWithSignature("addTemplate(string,string[])", name, steps);
        return propose(targets, values, calldatas, description);
    }

    function addTemplate(string memory name, string[] memory steps) external onlyGovernance {
        // Emit event or store in storage
    }

    // Required overrides
    function votingDelay() public pure override(Governor, GovernorSettings) returns (uint256) { return 1; }
    function votingPeriod() public pure override(Governor, GovernorSettings) returns (uint256) { return 45818; }
    function proposalThreshold() public pure override(Governor, GovernorSettings) returns (uint256) { return 0; }
}