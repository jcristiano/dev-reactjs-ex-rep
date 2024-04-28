# Rotinas de conversao

## Como converter imagens JPG em PNG com o convert

```bash
for file in $( ls -1 images/* | grep '[0-9]\{3\}.jpg$'); do
    mogrify -format png ${file}
done
```


## Gerar thumbnail dos arquivos PNG

```bash
for file in $( ls -1 images/* | grep '[0-9]\{3\}.png$'); do
    fileNoExt=$( echo ${file} | awk -F '.' ' { print $1 } ' )
    convert ${file} -resize 200x200 -background none -gravity center -extent 200x200 ${fileNoExt}-thumbnail.png
done
```
