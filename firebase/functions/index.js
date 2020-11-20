require('dotenv').config()
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')

const api = require('./api')

const nuxtConfig = require('./nuxt.config.js')

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: 'nuxt',
}
const nuxt = new Nuxt(config)

let isReady = false

exports.nuxtssr = functions.https.onRequest(async (req, res) => {
  if (!isReady) {
    try {
      isReady = await nuxt.ready()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error' + e)
      process.exit(1)
    }
  }
  await nuxt.render(req, res)
})

exports.api = functions.https.onRequest(api)
