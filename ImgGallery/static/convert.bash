#!/bin/bash


function op_convert_to_png(){
    for file in $( ls -1 images/* | grep '[0-9]\{3\}.jpg$'); do
        mogrify -format png ${file}
    done
}


function op_gen_thumb(){
    for file in $( ls -1 images/* | grep '[0-9]\{3\}.png$'); do
        fileNoExt=$( echo ${file} | awk -F '.' ' { print $1 } ' )
        convert ${file} -resize 200x200 -background none -gravity center -extent 200x200 ${fileNoExt}-thumbnail.png
    done
}

op_convert_to_png
op_gen_thumb
