// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris",
    },
  },

  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: false,
    },
    zeroGTestnet: {
      url: process.env.RPC_URL || "https://evmrpc-testnet.0g.ai",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 12345,
      gasPrice: 20000000000, // 20 gwei
      timeout: 60000,
    },
    zeroGMainnet: {
      url: process.env.MAINNET_RPC || "https://evmrpc.0g.ai",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 12346,
      gasPrice: 20000000000,
    },
  },

  etherscan: {
    apiKey: {
      zeroGTestnet: process.env.EXPLORER_API_KEY || "",
      zeroGMainnet: process.env.EXPLORER_API_KEY || "",
    },
    customChains: [
      {
        network: "zeroGTestnet",
        chainId: 12345,
        urls: {
          apiURL: "https://explorer-testnet.0g.ai/api",
          browserURL: "https://explorer-testnet.0g.ai",
        },
      },
      {
        network: "zeroGMainnet",
        chainId: 12346,
        urls: {
          apiURL: "https://explorer.0g.ai/api",
          browserURL: "https://explorer.0g.ai",
        },
      },
    ],
  },

  mocha: {
    timeout: 100000,
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    scripts: "./scripts",
  },
};