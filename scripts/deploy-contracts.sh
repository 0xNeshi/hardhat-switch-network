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

export HARDHAT_IGNITION_CONFIRM_DEPLOYMENT=false

networks=(sepolia polygonAmoy)

for network in "${networks[@]}"; do
    echo "Deploying to $network..."
    eval "$deploy_command --network $network --parameters ignition/parameters/$network.json"
done

set +e

for chain_path in ./ignition/deployments/*; do
    chain=$(basename "$chain_path")
    npx hardhat ignition verify "$chain" --include-unrelated-contracts
done

echo "Moving compilation artifacts into projects..."

dir_array=("./artifacts" "./cache")

for proj in ./examples/*; do
    for dir in "${dir_array[@]}"; do
        cp -r "$dir" "$proj"
    done
done

for dir in "${dir_array[@]}"; do
    rm -rf "$dir"
done
