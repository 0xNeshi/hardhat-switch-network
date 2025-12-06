#!/bin/bash

echo "Running query tests in all projects..."

npm test

skip_project="$1"

for proj in ./examples/*; do
    proj_name=$(basename "$proj")
    if [[ "$proj_name" == "$skip_project" ]]; then
        echo "Skipping $proj_name"
        continue
    fi
 
    cd "$proj"
    npm test
    cd ../..
done
