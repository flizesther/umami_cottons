.PHONY: clean
clean:
	rm -rf ./firebase/functions/.nuxt
	rm -rf ./firebase/public/*
	rm -f ./firebase/package.json
	rm -f ./firebase/functions/nuxt.config.js

.PHONY: build
build:
	./build.sh

.PHONY: serve
serve:
	cd ./firebase
	firebase serve

.PHONY: deploy
deploy:
	./build.sh
	cd ./firebase
	firebase deploy

