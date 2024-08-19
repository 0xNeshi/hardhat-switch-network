import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HHSN", (m) => {
    const hhsn = m.contract("HHSN", ["default message"]);
    return { hhsn };
});