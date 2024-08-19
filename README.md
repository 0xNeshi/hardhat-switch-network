# Hardhat Switch Network TEMPORARY, SEE README-TEMPLATE.md

Allows changing the current network in Hardhat.

Useful for multi-chain projects, where switching between two networks in a script may be desirable.

## <<<<<<< Support Open Source >>>>>>>

**If you find this package useful, help me create other useful tools by donating ETH, USDC, MATIC, WETH or LINK on any of the EVM chains.**

**Address: 0xf35d9f86e5f620Dc8a6938b154E37FF23244Dff9**

![donate address](./assets/donate_to.png)

**Tests are run against live testnets to make sure the package works correctly. If you can, send some Sepolia ETH and Amoy MATIC to support the package reliability.**

## Installation

```bash
npm install --save-dev hardhat-switch-network
```

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

## Usage

Switch the network to any network defined in hardhat.config.js with this simple call:

```typescript
hre.switchNetwork("goerli");
```
