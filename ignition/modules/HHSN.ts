import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HHSN", (m) => {
    const message = m.getParameter("message");
    const hhsn = m.contract("HHSN", [message]);
    return { hhsn };
});
