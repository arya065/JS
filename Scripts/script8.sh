#!/bin/bash
filename="personahes.gz"
if [ -e "$filename" ]; then
    zcat "$filename" | awk '$2=="chiquitistan" {print $1}'
else
    echo "file does not exist."
fi
# I have a file personahes.gz that contains two columns <user><country of origin>. 
# We want to know the name of the citizens of “chiquitistan”. 
# File example:
# John Holland
# Pedro chiquitistan
# Ramiro Russia
# Joshua Denmark
