.PHONY: setup
setup:
	npm install -g firebase-tools
	npm install
	cd firebase/functions
	npm install

.PHONY: clean
clean:
	rm -rf ./firebase/functions/nuxt
	rm -rf ./firebase/functions/api
	rm -rf ./firebase/public/*
	rm -f ./firebase/functions/.env
	rm -f ./firebase/functions/package.json
	rm -f ./firebase/functions/nuxt.config.js

.PHONY: build
build:
	npm run build
	cp -R static/* ./firebase/public/
	cp package.json ./firebase/functions/package.json
	cp .env ./firebase/functions/.env
	cp -R .nuxt/ ./firebase/functions/nuxt/
	cp -R api/ ./firebase/functions/api/
	cp nuxt.config.js ./firebase/functions/nuxt.config.js

.PHONY: serve
serve:
	firebase -c firebase/firebase.json serve --only functions,hosting

.PHONY: deploy
deploy:
	firebase -c firebase/firebase.json deploy

