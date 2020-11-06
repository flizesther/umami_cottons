const StorageService = require('./services/StorageService');
const express = require('express');

module.exports = (config) => {

    const configStorage = {
        apiKey: config.API_KEY,
        projectId: config.PROJECT_ID,
        storageBucket: config.STORAGE_BUCKET
    }

    var service = new StorageService(configStorage)

    var router = express.Router()

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })

    router.get('/files', async(req, res) => {

        const path = req.query.path || '';

        const response = path == '' ? await service.getAll() : await service.getFile(path)

        res.status(response.status)
        res.json({
            ...response
        })
    })

    router.get('/:type', async(req, res) => {

        const type = req.params.type;
        const path = req.query.path || '';

        const response = await service.get(type, path);

        res.status(response.status)
        res.json({
            ...response
        })
    })

    return router
}