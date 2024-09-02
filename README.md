# Hardhat Switch Network Plugin

[![npm](https://img.shields.io/npm/v/hardhat-switch-network?color=blue)](https://www.npmjs.com/package/hardhat-switch-network)
[![GitHub Workflow Status](https://github.com/0xNeshi/hardhat-switch-network/actions/workflows/build.yml/badge.svg)](https://github.com/0xNeshi/hardhat-switch-network/actions/workflows/build.yml)
[![Project license](https://img.shields.io/github/license/0xNeshi/hardhat-switch-network.svg)](LICENSE)
[![hardhat](https://hardhat.org/buidler-plugin-badge.svg?1)](https://hardhat.org)

[Hardhat](https://hardhat.org) plugin for enabling on-the-fly network switching within your Hardhat scripts and tasks.

## What

This plugin allows you to switch between networks dynamically during the execution of Hardhat tasks or scripts. This is particularly useful when you need to interact with different Ethereum networks without restarting your Hardhat node or re-running your scripts.

## Installation

There are two ways to include this code into your project:

1. [Install the npm package](#1-the-npm-package-method)
2. [Just copy/paste it](#2-the-copypaste-method)

### 1. The npm Package Method

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

### 2. The Copy/Paste Method

-   if you're using TypeScript, open your _hardhat.config.ts_ and copy/paste the code from [./src/index.ts](./src/index.ts) and [./src/type-extensions.ts](./src/type-extensions.ts)
-   if you're using JavaScript, open your _hardhat.config.js_ file, copy/paste the code from [./src/index.ts](./src/index.ts), turn `imports` into `requires` and strip it of types. Voila!

> Tip: remove all the code related to providers you do not use on your project, e.g. if you're using `ethers.js`, remove `web3` provider update.

### Required plugins

There are no required plugins. This plugin automatically detects which underlying Hardhat plugin for interacting with the Ethereum blockchain is being used and hooks into it. You just install this plugin and use it!

Currently supported Hardhat plugins for interacting with the Ethereum blockchain:

-   [@nomicfoundation/hardhat-ethers](https://github.com/NomicFoundation/hardhat/tree/main/packages/hardhat-ethers)
-   [@nomicfoundation/hardhat-viem](https://github.com/NomicFoundation/hardhat/tree/main/packages/hardhat-viem)
-   [@nomicfoundation/hardhat-web3-v4](https://github.com/NomicFoundation/hardhat/tree/main/packages/hardhat-web3-v4)

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

This plugin does not add any new configuration options to your `hardhat.config.js` or `hardhat.config.ts` files.

## Usage

There are no additional steps you need to take for this plugin to work.

Install it and access `switchNetwork` through the Hardhat Runtime Environment anywhere you need it (tasks, scripts, tests, etc).

## Support Open Source

Building and maintaining `hardhat-switch-network` requires significant time and effort, and your support can help keep this project alive and thriving. If you find this plugin helpful in your projects, please consider contributing to its ongoing development.

### Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Go to [CONTRIBUTING.md](./CONTRIBUTING.md) to learn about how to set up Hardhat's development environment.

### Donate Cryptocurrency

If you're able, financial contributions are greatly appreciated and help cover the costs of development and support. You can donate using the following Ethereum-based tokens: **ETH, USDT, USDC, wBTC, wETH**.

**Ethereum Wallet Address:**

```mm
0xf35d9f86e5f620Dc8a6938b154E37FF23244Dff9
```

![donate address](./assets/donate_to.png)

Your support is crucial in ensuring that `hardhat-switch-network` continues to grow and serve the community. Thank you for helping keep this project going!

**Don't forget to give the project a star!** :star:

**Happy coding!**
