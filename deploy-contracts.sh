#!/bin/bash

networks=(sepolia polygonAmoy)
export HARDHAT_IGNITION_CONFIRM_DEPLOYMENT=false
for network in "${networks[@]}"; do
    echo "Deploying to $network..."
    npx hardhat ignition deploy ignition/modules/HHSN.ts --network "$network" --verify
done

for proj in ./samples/*; do
    cp -r ./typechain-types "$proj"
    cp -r ./artifacts "$proj"
    cp -r ./cache "$proj"
done
