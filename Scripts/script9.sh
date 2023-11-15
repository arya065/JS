#!/bin/bash
filename="$1"
if [ ! -e "$filename" ]; then
    echo "File doesn't exist."
    exit 1
fi
grep -i -w -e "one" -e "two" "$filename"
# You are asked to create a script that shows the lines of any file that contain the words one and two, 
# regardless of whether they are in upper and lower case.