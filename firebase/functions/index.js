const functions = require('firebase-functions');
const { Nuxt } = require("nuxt");

const config = {
    debug: true
}

const nuxt = new Nuxt(config)

let isReady = false;

async function handleRequest(req, res) {
    if (!isReady) {
        try {
            isReady = await nuxt.ready();
        } catch (error) {
            process.exit(1);
        }
    }
    await nuxt.render(req, res);
}

exports.nuxtssr = functions.https.onRequest(handleRequest);