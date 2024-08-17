import "hardhat/types/runtime";

declare module "hardhat/types/runtime" {
    // This is an extension to the Hardhat Runtime Environment.
    // These new functions will be available in tasks' actions, scripts, and tests.
    export interface HardhatRuntimeEnvironment {
        switchNetwork(networkName: string): Promise<void>;
    }
}
