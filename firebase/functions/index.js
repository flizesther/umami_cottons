require('dotenv').config()
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')

const api = require('./api')

const nuxtConfig = require('./nuxt.config.js')

const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: 'nuxt',
}
const nuxt = new Nuxt(config)

exports.nuxtssr = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

exports.api = functions.https.onRequest(api)
