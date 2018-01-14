#!/bin/bash
set -eo pipefail

cd $(git rev-parse --show-toplevel)
for d in ./dist/*/pb; do
    cp ./src/pb/*.js $d/
done
