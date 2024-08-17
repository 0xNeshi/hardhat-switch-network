# Hardhat Switch Network TEMPORARY, SEE README-TEMPLATE.md

Allows changing the current network in Hardhat.

Useful for multi-chain projects, where switching between two networks in a script may be desirable.

_Warning: This is a bit of a hack, some modules may break._

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
