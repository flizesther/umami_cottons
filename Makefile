.PHONY: install
setup:
	npm install -g firebase-tools
	npm install
	cp package.json ./firebase/functions/package.json
	cd firebase/functions
	npm install

.PHONY: clean
clean:
	rm -rf ./firebase/functions/nuxt
	rm -rf ./firebase/functions/api
	rm -rf ./firebase/public/*
	rm -f ./firebase/functions/.env
	rm -f ./firebase/functions/package.json
	rm -f ./firebase/functions/package-lock.json
	rm -f ./firebase/functions/nuxt.config.js

.PHONY: serve
serve:
	npm run dev

.PHONY: emulation
emulation: cp-emulation build
	firebase -c firebase/firebase.json serve --only functions,hosting

.PHONY: deploy
deploy: cp-prod build
	firebase -c firebase/firebase.json deploy

.PHONY: cp-emulation
cp-emulation:
	cp .env.emulation ./firebase/functions/.env

.PHONY: cp-prod
cp-prod:
	cp .env.prod ./firebase/functions/.env

.PHONY: build
build:
	npm run build
	cp -R static/* ./firebase/public/
	cp package.json ./firebase/functions/package.json
	cp -R .nuxt/ ./firebase/functions/nuxt/
	cp -R api/ ./firebase/functions/api/
	cp nuxt.config.js ./firebase/functions/nuxt.config.js

