import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-ignition-ethers";
import "@typechain/hardhat";
import { vars } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/types";

const providerApiKey = vars.get("ALCHEMY_API_KEY");
const deployerPrivateKey = vars.get("DEPLOYER_PRIVATE_KEY");
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
