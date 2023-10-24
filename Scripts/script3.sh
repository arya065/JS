#!/bin/bash
key="myfpschool"
path="file.txt"

if (grep -q $key $path); then
    echo "The word is myfpschool"
else
    echo "The word is not myfpschool"
fi