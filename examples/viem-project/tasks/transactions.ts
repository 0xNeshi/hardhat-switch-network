import { assert } from "console";
import { task } from "hardhat/config";
import ethereumSepoliaAddresses from "../../../ignition/deployments/chain-11155111/deployed_addresses.json";
import polygonAmoyAddresses from "../../../ignition/deployments/chain-80002/deployed_addresses.json";

const eth_sep_address = ethereumSepoliaAddresses["HHSN#HHSN"] as `0x${string}`;
const pol_amoy_address = polygonAmoyAddresses["HHSN#HHSN"] as `0x${string}`;

task("transactions", "Tests sending transactions to multiple chains with viem", async (_, hre) => {
    const randomNumber = Math.floor(Math.random() * 10000);
    // test sending transactions
    console.log("Updating message on Polygon Amoy...");
    await hre.switchNetwork("polygonAmoy");
    const pol_amoy_hhsn = await hre.viem.getContractAt("HHSN", pol_amoy_address);
    await pol_amoy_hhsn.write.update([`Polygon Amoy: ${randomNumber}`]);

    console.log("Updating message on Ethereum Sepolia...");
    await hre.switchNetwork("sepolia");
    const eth_sep_hhsn = await hre.viem.getContractAt("HHSN", eth_sep_address);
    await eth_sep_hhsn.write.update([`Sepolia: ${randomNumber}`]);

    // test getting data from the chain
    console.log("Test message on Polygon Amoy...");
    await hre.switchNetwork("polygonAmoy");
    assert(await pol_amoy_hhsn.read.message(), `Polygon Amoy: ${randomNumber}`);

    console.log("Test message on Ethereum Sepolia...");
    await hre.switchNetwork("sepolia");
    assert(await eth_sep_hhsn.read.message(), `Sepolia: ${randomNumber}`);
});
