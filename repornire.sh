#!/bin/sh
#Script minunat de repornire

while true
do
node index.js
echo "Apasa CTRL + C pentru a opri"
echo "Restart in:"
for i in 5 4 3 2 1
do
echo "$i..."
sleep 1
done
echo "Se restarteaza..."
done
