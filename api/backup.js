const axios = require('axios');
const BackupService = require('./services/BackupService');
const express = require('express');

module.exports = (config) => {

    var service = new BackupService(axios, { url: config.API_URL })

    var router = express.Router()

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })

    router.get('/all', async(req, res) => {
        const response = await service.all()
        res.status(response.status)
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-disposition': 'attachment; filename=data.json'
        })
        res.end(JSON.stringify(response.status == 200 ? response.data : response.error))
    })

    return router
}