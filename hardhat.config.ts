import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-ignition-ethers";
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
