import { assert } from "console";
import { task } from "hardhat/config";
import { abi as ethereumSepoliaABI } from "../../../ignition/deployments/chain-11155111/artifacts/HHSN#HHSN.json";
import ethereumSepoliaAddresses from "../../../ignition/deployments/chain-11155111/deployed_addresses.json";
import { abi as polygonAmoyABI } from "../../../ignition/deployments/chain-80002/artifacts/HHSN#HHSN.json";
import polygonAmoyAddresses from "../../../ignition/deployments/chain-80002/deployed_addresses.json";

const eth_sep_address = ethereumSepoliaAddresses["HHSN#HHSN"];
const pol_amoy_address = polygonAmoyAddresses["HHSN#HHSN"];

task(
    "transactions",
    "Tests sending transactions to multiple chains with Web3.js (v4)",
    async (_, hre) => {
        const randomNumber = Math.floor(Math.random() * 10000);
        // test sending transactions
        console.log("Updating message on Polygon Amoy...");
        await hre.switchNetwork("polygonAmoy");
        const [deployerAmoy] = await hre.web3.eth.getAccounts();
        const pol_amoy_hhsn = new hre.web3.eth.Contract(polygonAmoyABI, pol_amoy_address);
        const blockAmoy = await hre.web3.eth.getBlock("latest");
        await pol_amoy_hhsn.methods
            .update(`Polygon Amoy: ${randomNumber}`)
            .send({ from: deployerAmoy, gas: blockAmoy.gasLimit.toString() });

        console.log("Updating message on Ethereum Sepolia...");
        await hre.switchNetwork("sepolia");
        const [deployerSepolia] = await hre.web3.eth.getAccounts();
        const eth_sep_hhsn = new hre.web3.eth.Contract(ethereumSepoliaABI, eth_sep_address);
        const blockSepolia = await hre.web3.eth.getBlock("latest");
        await eth_sep_hhsn.methods
            .update(`Sepolia: ${randomNumber}`)
            .send({ from: deployerSepolia, gas: blockSepolia.gasLimit.toString() });

        // test getting data from the chain
        console.log("Test message on Polygon Amoy...");
        await hre.switchNetwork("polygonAmoy");
        assert(await pol_amoy_hhsn.methods.message().call(), `Polygon Amoy: ${randomNumber}`);

        console.log("Test message on Ethereum Sepolia...");
        await hre.switchNetwork("sepolia");
        assert(await eth_sep_hhsn.methods.message().call(), `Sepolia: ${randomNumber}`);
    },
);
