#!/bin/bash

set -e

deploy_command="npx hardhat ignition deploy ignition/modules/HHSN.ts"

while [[ "$#" -gt 0 ]]; do
    case $1 in
    --reset)
        deploy_command+=" --reset"
        export HARDHAT_IGNITION_CONFIRM_RESET=false
        ;;
    *)
        echo "Unknown option: $1"
        exit 1
        ;;
    esac
    shift
done

networks=(sepolia polygonAmoy)
dir_array=(./typechain-types ./artifacts ./cache)

export HARDHAT_IGNITION_CONFIRM_DEPLOYMENT=false

for network in "${networks[@]}"; do
    echo "Deploying to $network..."
    eval "$deploy_command --network $network --parameters ignition/parameters/$network.json"
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
