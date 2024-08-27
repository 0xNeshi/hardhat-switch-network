import { extendEnvironment } from "hardhat/config";
import { createProvider } from "hardhat/internal/core/providers/construction";
import { HardhatPluginError, lazyFunction } from "hardhat/plugins";
import type { EthereumProvider } from "hardhat/types/provider";
import "./type-extensions";

extendEnvironment((hre) => {
    // We store providers for faster future lookups
    const providers: { [name: string]: EthereumProvider } = {
        [hre.network.name]: hre.network.provider,
    };

    async function getProvider(name: string): Promise<EthereumProvider> {
        if (!providers[name]) {
            providers[name] = await createProvider(hre.config, name, hre.artifacts);
        }
        return providers[name];
    }

    hre.switchNetwork = lazyFunction(() => async (networkName: string) => {
        // check if network config is set
        if (!hre.config.networks[networkName]) {
            throw new HardhatPluginError(
                "hardhat-switch-network",
                `Couldn't find network '${networkName}' in the Hardhat config`,
            );
        }

        const toProvider = await getProvider(networkName);

        // update hardhat's network data
        hre.network.name = networkName;
        hre.network.config = hre.config.networks[networkName];
        hre.network.provider = toProvider;

        // update underlying library's provider data
        if ("ethers" in hre) {
            const { HardhatEthersProvider } = await import(
                "@nomicfoundation/hardhat-ethers/internal/hardhat-ethers-provider"
            );
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (hre.ethers as any).provider = new HardhatEthersProvider(toProvider, networkName);
        }
        if ("web3" in hre) {
            hre.web3 = new (await import("web3")).Web3(toProvider);
        }
    });
});
