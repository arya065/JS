#!/bin/bash
if [[ $(file -b --mime-type palabra.gzip) == application/gzip ]]; then
    temp_file=$(mktemp)
    gunzip -c arc.gzip > "$temp_file"
    
    if [ $(cut -d ' ' -f1 "$temp_file") == $(cut -d ' ' -f2 "$temp_file") == $(cut -d ' ' -f3 "$temp_file") ]; then
        echo "similar"
    else
        echo "not similar"
    fi
else
  echo "not exist .gzip"
fi
