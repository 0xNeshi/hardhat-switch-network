#!/bin/bash

set -e

networks=(sepolia polygonAmoy)
dir_array=(./typechain-types ./artifacts ./cache)

export HARDHAT_IGNITION_CONFIRM_DEPLOYMENT=false

for network in "${networks[@]}"; do
    echo "Deploying to $network..."
    npx hardhat ignition deploy ignition/modules/HHSN.ts --network "$network" --parameters "ignition/parameters/$network.json"
done

set +e

for chain_path in ./ignition/deployments/*; do
    chain=$(basename "$chain_path")
    npx hardhat ignition verify "$chain" --include-unrelated-contracts
done

for proj in ./samples/*; do
    for dir in "$dir_array"; do
        cp -r "$dir" "$proj"
        rm -rf "$dir"
    done
done
