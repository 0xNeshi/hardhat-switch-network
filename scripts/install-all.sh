#!/bin/bash

set -e  # Exit on error
set -o pipefail  # Catch errors in pipes

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

echo "Running command in root: $command"
if ! eval "$command"; then
    echo "ERROR: Failed to run '$command' in root directory"
    exit 1
fi

echo "Root installation completed successfully"

for proj in ./examples/*; do
    if [ -d "$proj" ]; then
        echo "========================================="
        echo "Processing $proj..."
        cd "$proj" || exit 1
        
        if ! eval "$command"; then
            echo "ERROR: Failed to run '$command' in $proj"
            exit 1
        fi
        
        echo "✓ $proj installation completed"
        cd "$root_dir" || exit 1
    fi
done

echo "========================================="
echo "✓ All installations complete"
