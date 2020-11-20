#!/bin/bash
ENVIROMENT=${1:-emulation}
DEPLOY=${2:-functions,hosting}

cp ".env.${ENVIROMENT}" ./firebase/functions/.env

npm run build

cp -R static/* ./firebase/public/
cp package.json ./firebase/functions/package.json
cp -R .nuxt/ ./firebase/functions/nuxt/
cp -R api/ ./firebase/functions/api/
cp nuxt.config.js ./firebase/functions/nuxt.config.js

if [ $ENVIROMENT = "prod" ];
then
    firebase -c firebase/firebase.json deploy --only ${DEPLOY}
else
    firebase -c firebase/firebase.json serve --only ${DEPLOY}
fi