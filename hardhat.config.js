require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades"); // For UUPS upgrades
require("@nomicfoundation/hardhat-verify"); // For contract verification
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // Solidity compiler settings
  solidity: {
    version: "0.8.24", // Matches your setup, aligns with 0G docs
    settings: {
      evmVersion: "cancun", // Ensures compatibility with 0G's latest EVM upgrades
      optimizer: {
        enabled: true,
        runs: 200, // Optimized for gas efficiency
      },
      viaIR: true, // Enables inline assembly support for advanced contracts
      metadata: {
        bytecodeHash: "none", // Excludes metadata hash for smaller bytecode
      },
    },
  },

  // Network configurations
  networks: {
    hardhat: {
      chainId: 31337, // Default local Hardhat network
      allowUnlimitedContractSize: false, // Strict size checks
    },
    og_testnet_v3: {
      url: process.env.RPC_URL || "https://evmrpc-testnet.0g.ai", // Updated fallback URL
      accounts: process.env.PRIVATE_KEY ? [`0x${process.env.PRIVATE_KEY}`] : [], // Ensure 0x prefix
      chainId: 16601, // Corrected to 0G Testnet V3 per your config
      gasPrice: 20000000000, // 20 Gwei, adjustable based on network conditions
      timeout: 60000, // 60s timeout for slow responses
    },
    og_mainnet: {
      url: process.env.MAINNET_RPC || "https://evmrpc.0g.ai", // Mainnet RPC
      accounts: process.env.PRIVATE_KEY ? [`0x${process.env.PRIVATE_KEY}`] : [],
      chainId: 16661, // 0G Mainnet chain ID
      gasPrice: 20000000000,
      timeout: 60000,
    },
  },

  // Etherscan configuration for 0G Chain Scan verification
  etherscan: {
    apiKey: {
      og_testnet_v3: process.env.EXPLORER_API_KEY || "", // Placeholder for testnet
      og_mainnet: process.env.EXPLORER_API_KEY || "", // Placeholder for mainnet
    },
    customChains: [
      {
        network: "og_testnet_v3",
        chainId: 16601,
        urls: {
          apiURL: "https://chainscan-galileo.0g.ai/open/api", // 0G Testnet explorer API
          browserURL: "https://chainscan-galileo.0g.ai", // Testnet block explorer
        },
      },
      {
        network: "og_mainnet",
        chainId: 16661,
        urls: {
          apiURL: "https://chainscan.0g.ai/open/api", // 0G Mainnet explorer API
          browserURL: "https://chainscan.0g.ai", // Mainnet block explorer
        },
      },
    ],
  },

  // Mocha testing settings
  mocha: {
    timeout: 100000, // 100s timeout for complex tests
  },

  // Paths for project structure
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    scripts: "./scripts",
  },
};

// Warn if required environment variables are missing
const { PRIVATE_KEY, RPC_URL, EXPLORER_API_KEY } = process.env;
if (!PRIVATE_KEY) console.warn("⚠️ Please set PRIVATE_KEY in .env file");
if (!RPC_URL) console.warn("⚠️ Please set RPC_URL in .env file");
if (!EXPLORER_API_KEY) console.warn("⚠️ Please set EXPLORER_API_KEY in .env file for verification");