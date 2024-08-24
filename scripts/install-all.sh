#!/bin/bash

echo "Running 'npm install' in all projects..."

root_dir=$(pwd)

echo "Root: $root_dir"

command="npm install"

while [[ "$#" -gt 0 ]]; do
    case $1 in
    --clean)
        command="npm ci"
        export HARDHAT_IGNITION_CONFIRM_RESET=false
        ;;
    *)
        echo "Unknown option: $1"
        exit 1
        ;;
    esac
    shift
done

eval "$command"

for proj in ./samples/*; do
    cd "$proj"
    eval "$command"
    cd ../..
done
