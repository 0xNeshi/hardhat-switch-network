#!/bin/bash

echo "Running query tests in all projects..."

npm test

for proj in ./samples/*; do
    cd "$proj"
    npm test
    cd ../..
done
