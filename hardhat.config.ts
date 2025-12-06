import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-web3-v4";
import { vars } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/types";

// You can get your own at https://dashboard.alchemyapi.io
const providerApiKey = vars.get("ALCHEMY_API_KEY");
// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey = vars.get(
    "DEPLOYER_PRIVATE_KEY",
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
);
const etherscanApiKey = vars.get("ETHERSCAN_API_KEY");
const polygoncanApiKey = vars.get("POLYGONSCAN_API_KEY");

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    defaultNetwork: "sepolia",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        polygonAmoy: {
            url: `https://polygon-amoy.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
    },
    etherscan: {
        apiKey: {
            sepolia: etherscanApiKey,
            polygonAmoy: polygoncanApiKey,
        },
        customChains: [
            {
                network: "polygonAmoy",
                chainId: 80002,
                urls: {
                    apiURL: "https://api-amoy.polygonscan.com/api",
                    browserURL: "https://amoy.polygonscan.com/",
                },
            },
        ],
    },
};

export default config;
