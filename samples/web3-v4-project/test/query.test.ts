import { expect } from "chai";
import hre from "hardhat";
import { abi as ethereumSepoliaABI } from "../../../ignition/deployments/chain-11155111/artifacts/HHSN#HHSN.json";
import ethereumSepoliaAddresses from "../../../ignition/deployments/chain-11155111/deployed_addresses.json";
import { abi as polygonAmoyABI } from "../../../ignition/deployments/chain-80002/artifacts/HHSN#HHSN.json";
import polygonAmoyAddresses from "../../../ignition/deployments/chain-80002/deployed_addresses.json";

const eth_sep_address = ethereumSepoliaAddresses["HHSN#HHSN"];
const pol_amoy_address = polygonAmoyAddresses["HHSN#HHSN"];

describe("web3.js (v4) query tests", () => {
    it("should be able read contract state on multiple networks", async () => {
        await hre.switchNetwork("polygonAmoy");
        const pol_amoy_hhsn = new hre.web3.eth.Contract(polygonAmoyABI, pol_amoy_address);
        const amoy_msg: string = await pol_amoy_hhsn.methods.message().call();
        expect(amoy_msg.startsWith("Polygon Amoy: ")).to.be.true; // eslint-disable-line @typescript-eslint/no-unused-expressions

        await hre.switchNetwork("sepolia");
        const eth_sep_hhsn = new hre.web3.eth.Contract(ethereumSepoliaABI, eth_sep_address);
        const sep_msg: string = await eth_sep_hhsn.methods.message().call();
        expect(sep_msg.startsWith("Sepolia: ")).to.be.true; // eslint-disable-line @typescript-eslint/no-unused-expressions
    });
});
