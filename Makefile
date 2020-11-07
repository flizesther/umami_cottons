.PHONY: install
install:
	./install.sh

.PHONY: clean
clean:
	./clean.sh

.PHONY: serve
serve:
	npm run dev

.PHONY: emulation
emulation:
	./build.sh emulation

.PHONY: deploy
deploy:
	./build.sh prod
