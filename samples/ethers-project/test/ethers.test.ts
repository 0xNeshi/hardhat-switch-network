import { expect } from "chai";
import hre from "hardhat";
import ethereumSepoliaAddresses from "../../../ignition/deployments/chain-11155111/deployed_addresses.json";
import polygonAmoyAddresses from "../../../ignition/deployments/chain-80002/deployed_addresses.json";

const eth_sep_address = ethereumSepoliaAddresses["HHSN#HHSN"];
const pol_amoy_address = polygonAmoyAddresses["HHSN#HHSN"];

describe("ethers tests", () => {
    it("should be able read contract state on multiple networks", async () => {
        await hre.switchNetwork("sepolia");
        const eth_sep_hhsn = await hre.ethers.getContractAt("HHSN", eth_sep_address);
        const sep_msg = await eth_sep_hhsn.message();
        expect(sep_msg.startsWith("Sepolia: ")).to.be.true;

        await hre.switchNetwork("polygonAmoy");
        const pol_amoy_hhsn = await hre.ethers.getContractAt("HHSN", pol_amoy_address);
        const amoy_msg = await pol_amoy_hhsn.message();
        expect(amoy_msg.startsWith("Polygon Amoy: ")).to.be.true;
        await expect(eth_sep_hhsn.message()).to.be.rejected;
    });
});
