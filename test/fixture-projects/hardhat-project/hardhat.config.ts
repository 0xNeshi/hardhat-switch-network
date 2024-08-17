// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";
import { vars } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "../../../src/index";

const providerApiKey = vars.get("ALCHEMY_API_KEY");
const deployerPrivateKey = vars.get(
    "DEPLOYER_PRIVATE_KEY",
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
);

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    defaultNetwork: "mainnet",
    networks: {
        hardhat: {},
        mainnet: {
            url: `https://eth-mainnet.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
        polygon: {
            url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
            accounts: [deployerPrivateKey],
        },
    },
};

export default config;
