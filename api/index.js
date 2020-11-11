const express = require('express')
const bodyParser = require('body-parser')

const app = express()

module.exports = (config = {}) => {
  const apiConfig = {
    API_KEY: config.API_KEY || process.env.API_KEY,
    API_URL: config.API_URL || process.env.API_URL,
    API_AUTH_URL: config.API_AUTH_URL || process.env.API_AUTH_URL,
    PROJECT_ID: config.PROJECT_ID || process.env.PROJECT_ID,
    STORAGE_BUCKET: config.STORAGE_BUCKET || process.env.STORAGE_BUCKET,
  }

  const auth = require('./auth')(apiConfig)
  const collection = require('./collection')(apiConfig)
  const backup = require('./backup')(apiConfig)
  const storage = require('./storage')(apiConfig)

  app.use(bodyParser.json())

  const apiPath = process.env.NODE_ENV === 'production' ? '/api' : '' // Fix to deploy nuxt or firebase

  app.use(function timeLog(req, res, next) {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    // eslint-disable-next-line no-console
    console.log('Url: ', fullUrl, 'Time: ', Date.now())
    next()
  })

  app.use(apiPath + '/auth', auth)
  app.use(apiPath + '/collection', collection)
  app.use(apiPath + '/backup', backup)
  app.use(apiPath + '/storage', storage)

  app.get(apiPath + '/health', (req, res) => {
    res.status(200)
    res.json({ status: 200 })
  })

  return app
}
