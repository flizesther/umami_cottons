.PHONY: clean
clean:
	rm -rf ./firebase/functions/.nuxt
	rm -rf ./firebase/public/*
	rm -f ./firebase/package.json
	rm -f ./firebase/functions/nuxt.config.js

.PHONY: build
build:
	npm run build
	cp package.json ./firebase/package.json
	cp -R static/* ./firebase/public/
	cp -R .nuxt/ ./firebase/functions/.nuxt/
	cp nuxt.config.js ./firebase/functions/nuxt.config.js

.PHONY: serve
serve:
	cd ./firebase
	firebase serve

.PHONY: deploy
deploy:
	./build.sh
	cd ./firebase
	firebase deploy

