# How to contribute to `hardhat-switch-network`

This document contains some tips on how to collaborate in this project.

## Filing an issue

If you find a bug or want to propose a new feature, please [open an issue](https://github.com/0xNeshi/hardhat-switch-network/issues/new). Pull requests are welcome, but we recommend you discuss it in an issue first, especially for big changes. This will increase the odds that we can accept your PR.

## Project structure

This repository is handled with [npm](https://www.npmjs.com/).

There's a folder called `samples/` that contains the same example project implemented with all the supported libraries for interacting with the Ethereum blockchain.

## Installing

To install the project's dependencies, run `npm i` in the root directory of the repository.

You will also need to set up environment variables to ensure your Hardhat environment is configured with the appropriate API keys and network URLs. To be able to run tests against live networks, you will need to set an Alchemy API key:

```bash
npx hardhat vars set ALCHEMY_API_KEY <your-alchemy-api-key>
```

To test out how the extension behaves when sending transactions on live testnets, you will need to redeploy the test contract (see _contracts/HHSN.sol_), and to do that, you will need to provide your own deployer account private key, and your Etherscan and Polygonscan API keys:

```bash
npx hardhat vars set DEPLOYER_PRIVATE_KEY <your-deployer-account-private-key>
npx hardhat vars set ETHERSCAN_API_KEY <your-etherscan-api-key>
npx hardhat vars set POLYGONSCAN_API_KEY <your-polygonscan-api-key>
```

You will also need to fund your deployer account with some Sepolia ETH and Polygon Amoy MATIC. You can get some from the following facets:

-   Sepolia ETH: https://www.alchemy.com/faucets/ethereum-sepolia
-   Amoy MATIC: https://www.alchemy.com/faucets/polygon-amoy

## Building the projects

Sample projects require the plugin to be built. Our recommendation is to run `npm run watch` from the root folder. This will keep everything compiled, and you can always test the most recent changes to the plugin.

## Testing

All tests are written using [mocha](https://mochajs.org) and [chai](https://www.chaijs.com).

To run query tests against live networks in the root and all sample projects, simply run:

```bash
npm test
```

To test sending transactions to live networks in all sample projects, run:

```bash
npm run test-live-txs
```

### Per-package

You can run a sample project's query tests by executing `npm test` inside its folder
You can also run transaction tests by executing `npm run test-live-txs` inside the folder.

### Entire project

You can run all the query tests at once by running `npm test` from the root folder, and to run all transaction tests at once, you can execute `npm run test-live-txs` from the root folder.

## Code formatting

We use [Prettier](https://prettier.io/) to format all the code without any special configuration. Whatever Prettier does is considered The Right Thing. It's completely fine to commit non-prettied code and then reformat it in a later commit.

We also have [eslint](https://eslint.org/) installed in all the projects. It checks that you have run Prettier and forbids some dangerous patterns.

The linter is always run in the CI, so make sure it passes before pushing code. You can use `npm run lint` to check for errors.

You can also run `npm run format` to format all of the files.

### Website and documentation branching

If you are modifying the default config, adding a feature, or doing any kind of technical work that should be reflected in the documentation, the documentation change should be contained in the same branch and PR as the change.

If you are working purely on the website or documentation, not as a result of a technical change, you should branch from [`master`](https://github.com/0xNeshi/hardhat-switch-network/tree/master) and use it as the base branch in your pull request.

Note that the `master` branch is automatically deployed, so take care when merging into it.
