npm run build

cp package.json ./firebase/package.json
cp -R static/* ./firebase/public/
cp -R .nuxt/ ./firebase/functions/.nuxt/
cp nuxt.config.js ./firebase/functions/nuxt.config.js



