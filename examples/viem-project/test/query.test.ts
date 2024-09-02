import { expect } from "chai";
import hre from "hardhat";
import ethereumSepoliaAddresses from "../../../ignition/deployments/chain-11155111/deployed_addresses.json";
import polygonAmoyAddresses from "../../../ignition/deployments/chain-80002/deployed_addresses.json";

const eth_sep_address = ethereumSepoliaAddresses["HHSN#HHSN"] as `0x${string}`;
const pol_amoy_address = polygonAmoyAddresses["HHSN#HHSN"] as `0x${string}`;

describe("viem query tests", () => {
    it("should be able read contract state on multiple networks", async () => {
        await hre.switchNetwork("polygonAmoy");
        const pol_amoy_hhsn = await hre.viem.getContractAt("HHSN", pol_amoy_address);
        const amoy_msg = await pol_amoy_hhsn.read.message();
        expect((amoy_msg as string).startsWith("Polygon Amoy: ")).to.be.true; // eslint-disable-line @typescript-eslint/no-unused-expressions

        await hre.switchNetwork("sepolia");
        const eth_sep_hhsn = await hre.viem.getContractAt("HHSN", eth_sep_address);
        const sep_msg = await eth_sep_hhsn.read.message();
        expect((sep_msg as string).startsWith("Sepolia: ")).to.be.true; // eslint-disable-line @typescript-eslint/no-unused-expressions
    });
});
