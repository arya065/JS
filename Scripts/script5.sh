#!/bin/bash
if [ $(cut -d ' ' -f1 palabra.txt) == $(cut -d ' ' -f2 palabra.txt) == $(cut -d ' ' -f3 palabra.txt) ]; then
	echo "similar"
else
	echo "not similar"
fi