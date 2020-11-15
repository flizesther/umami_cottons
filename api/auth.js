const axios = require('axios')
const express = require('express')
const AuthService = require('./services/AuthService')

module.exports = (config) => {
  const service = new AuthService(axios, {
    url: config.API_AUTH_URL,
    apiKey: config.API_KEY,
  })

  const router = express.Router()

  router.post('/login', async (req, res) => {
    const response = await service.login(req.body)
    res.status(response.status)
    res.json({
      ...response,
    })
  })

  router.post('/logout', (req, res) => {
    res.status(200)
    res.json({
      status: 200,
      data: {},
    })
  })

  router.post('/profile', async (req, res) => {
    const response = await service.profile(req.body)
    res.status(response.status)
    res.json({
      ...response,
    })
  })

  return router
}
