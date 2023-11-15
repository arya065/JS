#!/bin/bash
output_file="toatoa.gz"
tar -xf "$1" file1 file2 file3
grep "ALBORAN" file1 file2 file3 | gzip > "$output_file"
rm file1 file2 file3
echo "Result saved to $output_file"
# I have a tar with three files. 
# You are asked to create a script that generates a toatoa.gz 
# file with the lines from the first three files that contain the string “ALBORAN”s 

