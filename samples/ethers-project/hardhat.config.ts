import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-switch-network";
import { vars } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/types";
import "./tasks";

const providerApiKey = vars.get("ALCHEMY_API_KEY");
const deployerPrivateKey = vars.get("DEPLOYER_PRIVATE_KEY");

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
};

export default config;
