#!/bin/bash

if [ -f "vitaminOfTheDay.zip" ]; then
    rm ./vitaminOfTheDay.zip
fi

mkdir dist

cp ./package.json ./dist/package.json

cd dist

# remove unneeded files
rm -rf package-lock.json

npm i --prod
zip -r vitaminOfTheDay.zip ./
mv vitaminOfTheDay.zip ../

