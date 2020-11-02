.PHONY: clean
clean:
	rm -rf ./firebase/functions/.nuxt
	rm -rf ./firebase/public/*
	rm -f ./firebase/package.json
	rm -f ./firebase/functions/nuxt.config.js

.PHONY: build
build:
	./build.sh

.PHONY: deploy
deploy:
	./dploy.sh
