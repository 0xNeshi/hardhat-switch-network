# hardhat-switch-network

_A Hardhat plugin for dynamic network switching during runtime_

[Hardhat](https://hardhat.org) plugin for enabling on-the-fly network switching within your Hardhat scripts and tasks.

## What

This plugin allows you to switch between networks dynamically during the execution of Hardhat tasks or scripts. This is particularly useful when you need to interact with different Ethereum networks without restarting your Hardhat node or re-running your scripts.

## Installation

To install the plugin, use the following command:

```bash
npm install --save-dev hardhat-switch-network
```

or

```bash
yarn add -D hardhat-switch-network
```

Import the plugin in your `hardhat.config.js`:

```js
require("hardhat-switch-network");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "hardhat-switch-network";
```

## Required plugins

-   [@nomicfoundation/hardhat-ethers](https://github.com/NomicFoundation/hardhat/tree/main/packages/hardhat-ethers)

## Tasks

This plugin does not add any new Hardhat tasks. It focuses on extending the functionality of existing tasks by enabling network switching.

## Environment extensions

This plugin extends the Hardhat Runtime Environment by adding a `switchNetwork` function. This function allows you to switch to a different network during runtime.

```ts
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main(hre: HardhatRuntimeEnvironment) {
    // Switch to a different network
    await hre.switchNetwork("sepolia");

    // Now you can interact with the new network
}
```

## Configuration

This plugin does not add any new configuration options to your hardhat.config.js or hardhat.config.ts files.

## Usage

To use the `switchNetwork` function in your Hardhat scripts, tasks, or tests:

1. **Set Up Environment Variables:** Ensure your Hardhat environment is configured with the appropriate API keys and network URLs. You can set these using:

    ```bash
    npx hardhat vars set ALCHEMY_API_KEY <your-alchemy-api-key>
    npx hardhat vars set DEPLOYER_PRIVATE_KEY <your-deployer-account-private-key>
    ```

    If you wish to test out how the extenions behaves when sending transaction on live testnets,
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

## Support Open Source

If you find this plugin useful and want to support its development, consider making a donation. Your support helps me continue to work on open source projects and improve the tools available to the community.

You can contribute using the following cryptocurrencies and tokens:

-   **Bitcoin (BTC): your-bitcoin-address**
-   **Ethereum (ETH): 0xf35d9f86e5f620Dc8a6938b154E37FF23244Dff9**
-   **USDT (ERC20): 0xf35d9f86e5f620Dc8a6938b154E37FF23244Dff9**
-   **USDC (ERC20): 0xf35d9f86e5f620Dc8a6938b154E37FF23244Dff9**

![donate address](./assets/donate_to.png)

Thank you for your support!

Happy coding!
