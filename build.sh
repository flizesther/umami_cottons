#!/bin/bash
enviroment=$1

cp ".env.${enviroment}" ./firebase/functions/.env

npm run build

cp -R static/* ./firebase/public/
cp package.json ./firebase/functions/package.json
cp -R .nuxt/ ./firebase/functions/nuxt/
cp -R api/ ./firebase/functions/api/
cp nuxt.config.js ./firebase/functions/nuxt.config.js

if [ $enviroment = "prod" ];
then
    #firebase -c firebase/firebase.json deploy
    echo "No enable deploy prod"
else
    firebase -c firebase/firebase.json serve --only functions,hosting
fi