# Umami Cottons

Ummami Cottons is a web project for [https://umamicottons.com](https://umamicottons.com)

## Technology

* Nuxt (frontend and backend)
* Express (api)
* Firebase
	* Hosting
	* Realtime Database (json)
	* Storage
	* Authentication
	* Functions (api)


## Local build and serve (nuxt)

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev (or make serve)

# build for production and launch server
$ npm run build
$ npm run start
```

## Build, serve and deploy with Firebase
``` bash
# install dependencies
$ make install

# serve with hot reload at localhost:5000
$ make emulation

# deploy project
$ make deploy

# deploy project
$ firebase login
$ firebase deploy
```

## Configurations

There are a 3 configurations:

* LOCAL (only nuxt): **.env.local** is necessary to change **.env** to local build and serve. It is used with ```make serve```.
* EMULATION (with firebase): **.env.emulation** is used with ```make emulation```.
* PROD: **.env.prod** is used with ```make deploy```.

```
NODE_ENV = development or production
DEBUG_ENABLE = false
API_URL = https://example.firebaseio.com/v2
API_URL_V1 = https://example.firebaseio.com (deprecated)
API_KEY = XXXXXXXX
PROJECT_ID = example
STORAGE_BUCKET = example.appspot.com
API_AUTH_URL = https://identitytoolkit.googleapis.com/v1
API_CLIENT_URL = http://localhost:5000/api (3000 serve only nuxt, 5000 emulation with firebase or url of prod)
```

## FAQs

*  Firebase auth command: ``` firebase login ```
*  

## Author

Esther Rodriguez 