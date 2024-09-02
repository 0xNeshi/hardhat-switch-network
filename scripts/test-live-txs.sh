#!/bin/bash

echo "Running query tests in all projects..."

for proj in ./examples/*; do
    cd "$proj"
    npm run test-live-txs
    cd ../..
done
