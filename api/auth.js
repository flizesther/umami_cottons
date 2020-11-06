const axios = require('axios');
const AuthService = require('./services/AuthService');
const express = require('express');

module.exports = (config) => {

    var service = new AuthService(axios, { url: config.API_AUTH_URL, apiKey: config.API_KEY })

    var router = express.Router()

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })

    router.post('/login', async(req, res) => {
        const response = await service.login(req.body)
        res.status(response.status)
        res.json({
            ...response
        })
    })

    router.post('/logout', async(req, res) => {
        res.status(200)
        res.json({
            status: 200,
            data: {}
        })
    })

    router.post('/profile', async(req, res) => {
        const response = await service.profile(req.body)
        res.status(response.status)
        res.json({
            ...response
        })
    })

    return router
}