#!/bin/bash

echo "Running query tests in all projects..."

npm test

for proj in ./examples/*; do
    cd "$proj"
    npm test
    cd ../..
done
