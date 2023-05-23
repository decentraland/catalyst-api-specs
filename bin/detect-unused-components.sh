#!/bin/bash

ROOT=$PWD
DEBUG=1

cd openapi

FILES=$(find components/ -name "*.yaml" -or -name "*.json")

echo "The following component files are not referenced:"
for file in $FILES; do
  grep $(basename $file) $ROOT/openapi/components/schemas/**/*.yaml > /dev/null
  if [ $? -eq 1 ]; then
    grep "$file" $ROOT/openapi/paths/**/*.yaml  > /dev/null
    if [ $? -eq 1 ]; then
      echo "openapi/$file"
    fi
  fi
done
