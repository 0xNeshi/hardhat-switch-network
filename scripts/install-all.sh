#!/bin/bash

echo "Running 'npm install' in all projects..."

root_dir=$(pwd)

echo "Root: $root_dir"

command="npm ci"
export HARDHAT_IGNITION_CONFIRM_RESET=false

while [[ "$#" -gt 0 ]]; do
    case $1 in
    --latest)
        command="rm -f package-lock.json && npm install"
        ;;
    *)
        echo "Unknown option: $1"
        exit 1
        ;;
    esac
    shift
done

eval "$command"

for proj in ./examples/*; do
    cd "$proj"
    eval "$command"
    cd ../..
done
