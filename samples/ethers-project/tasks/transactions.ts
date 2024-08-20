import { assert } from "console";
import { task } from "hardhat/config";
import ethereumSepoliaAddresses from "../../../ignition/deployments/chain-11155111/deployed_addresses.json";
import polygonAmoyAddresses from "../../../ignition/deployments/chain-80002/deployed_addresses.json";

const eth_sep_address = ethereumSepoliaAddresses["HHSN#HHSN"];
const pol_amoy_address = polygonAmoyAddresses["HHSN#HHSN"];

task("transactions", "Tests sending transactions to multiple chains", async (taskArgs, hre) => {
    const randomNumber = Math.floor(Math.random() * 10000);
    // test sending transactions
    console.log("Updating message on Ethereum Sepolia...");
    await hre.switchNetwork("sepolia");
    const eth_sep_hhsn = await hre.ethers.getContractAt("HHSN", eth_sep_address);
    await (await eth_sep_hhsn.update(`Sepolia: ${randomNumber}`)).wait();

    console.log("Updating message on Polygon Amoy...");
    await hre.switchNetwork("polygonAmoy");
    const pol_amoy_hhsn = await hre.ethers.getContractAt("HHSN", pol_amoy_address);
    await (await pol_amoy_hhsn.update(`Polygon Amoy: ${randomNumber}`)).wait();

    // test getting data from the chain
    console.log("Test message on Ethereum Sepolia...");
    await hre.switchNetwork("sepolia");
    assert(await eth_sep_hhsn.message(), `Sepolia: ${randomNumber}`);

    console.log("Test message on Polygon Amoy...");
    await hre.switchNetwork("polygonAmoy");
    assert(await pol_amoy_hhsn.message(), `Polygon Amoy: ${randomNumber}`);
});
