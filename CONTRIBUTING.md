# How to contribute to `hardhat-switch-network`

This document contains some tips on how to collaborate in this project.

## Filing an issue

If you find a bug or want to propose a new feature, please [open an issue](https://github.com/0xNeshi/hardhat-switch-network/issues/new). Pull requests are welcome, but we recommend you discuss it in an issue first, especially for big changes. This will increase the odds that we can accept your PR.

## Project structure

This repository is handled with [npm](https://www.npmjs.com/).

There's a folder called `samples/` that each contain . All of them are plugins, except for `/packages/hardhat-core` which is the main project (i.e. the one that's published as [hardhat](https://npmjs.com/package/hardhat) in npm).

1. **Set Up Environment Variables:** Ensure your Hardhat environment is configured with the appropriate API keys and network URLs. You can set these using:

    ```bash
    npx hardhat vars set ALCHEMY_API_KEY <your-alchemy-api-key>
    npx hardhat vars set DEPLOYER_PRIVATE_KEY <your-deployer-account-private-key>
    ```

    If you wish to test out how the extension behaves when sending transactions on live testnets,
    you will need to redeploy the test contract (see _contracts/HHSN.sol_), and to do that, you will need to provide your own Etherscan and Polygonscan API keys:

    ```bash
    npx hardhat vars set ETHERSCAN_API_KEY <your-etherscan-api-key>
    npx hardhat vars set POLYGONSCAN_API_KEY <your-polygonscan-api-key>
    ```

2. **Use the `switchNetwork` Function:** You can now use the `switchNetwork` function to dynamically switch networks. For example, in a Hardhat script:

    ```ts
    import { HardhatRuntimeEnvironment } from "hardhat/types";

    async function main(hre: HardhatRuntimeEnvironment) {
        // Switch to Sepolia network
        await hre.switchNetwork("sepolia");

        // Perform transactions or deploy contracts on the Sepolia network
        // Example:
        // const result = await hre.ethers.getContractFactory("MyContract");
        // const contract = await result.deploy();
        // console.log(`Contract deployed at: ${contract.address}`);
    }

    main(hre).catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
    ```

3. **Run Transactions:** You can now run transactions against live networks. Just make sure to configure the appropriate environment variables and network settings in your Hardhat configuration.
