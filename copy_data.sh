#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")
for f in `grep -r config _haushalte-data | cut -d: -f1 | sort | uniq`
do
  cp "$f" _haushalte-dev
done
IFS=$SAVEIFS
