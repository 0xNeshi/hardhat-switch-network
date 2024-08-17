import { expect } from "chai";

import { useEnvironment } from "./helpers";

describe("Integration tests examples", function () {
    describe("Hardhat Runtime Environment extension", function () {
        useEnvironment("hardhat-project");

        it("Should add the functoin", function () {
            expect(this.hre.switchNetwork).is.instanceOf(Function);
        });

        it("Should fetch correct transaction data on multiple networks", async function () {
            const blockNumber = await this.hre.ethers.provider.getBlockNumber();
            expect(blockNumber).equals(0);

            await this.hre.switchNetwork("mainnet");

            let tx = await this.hre.ethers.provider.getTransaction(
                "0x012241d71724ec3e8fe3636ac0dca49d8bbf83debed91eeafca857a8851f4d31",
            );
            expect(tx?.from).equals("0x3C6a325bE174845bC4889C37be70B18DB4EFC2f1");

            await this.hre.switchNetwork("polygon");

            tx = await this.hre.ethers.provider.getTransaction(
                "0x59f64a658f2738ff24c478c797f8fa24dfe987dffbc712719df2166be65d11a9",
            );
            expect(tx?.from).equals("0x2BBaD4d9668ab7E1cc55365aC471E0bE21Cb2909");
        });
    });
});
