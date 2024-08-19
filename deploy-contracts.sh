#!/bin/bash

networks=(sepolia polygonAmoy)
export HARDHAT_IGNITION_CONFIRM_DEPLOYMENT=false
for network in "${networks[@]}"; do
    echo "Deploying to $network..."
    npx hardhat ignition deploy ignition/modules/HHSN.ts --network "$network" --verify
done

for proj in ./samples/*; do
    mv -f ./typechain-types "$proj"
    mv -f ./artifacts "$proj"
    mv -f ./cache "$proj"
done
