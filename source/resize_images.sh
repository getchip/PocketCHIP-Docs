#!/bin/bash

#resizes images as needed 

for file in ./images/*
do
	iw=`sips --getProperty pixelWidth "$file" | awk '/pixelWidth/ {print $2}'`
	echo $iw
	if [ $iw -gt "600" ]
	then
		sips -Z 600 $file
	fi
done