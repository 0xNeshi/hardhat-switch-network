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
    if [ -d "$proj" ]; then
        echo "Installing in $proj..."
        cd "$proj" || exit 1
        eval "$command" || exit 1
        cd "$root_dir" || exit 1
    fi
done
