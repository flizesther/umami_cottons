const axios = require('axios');
const CollectionService = require('./services/CollectionService');
const express = require('express');

module.exports = (config) => {

    var service = new CollectionService(axios, { url: config.API_URL })

    var router = express.Router()

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })

    router.get('/:collection', async(req, res) => {
        const response = await service.getAll(req.params.collection)
        res.status(response.status)
        res.json({
            ...response
        })
    })

    router.get('/:collection/:item', async(req, res) => {
        const response = await service.get(req.params.collection, req.params.item)
        res.status(response.status)
        res.json({
            ...response
        })
    })

    router.post('/:collection/:item', async(req, res) => {
        const response = await service.create(req.params.collection, req.body)
        res.status(response.status)
        res.json({
            ...response
        })
    })

    router.put('/:collection/:item', async(req, res) => {
        const response = await service.update(req.params.collection, req.body)
        res.status(response.status)
        res.json({
            ...response
        })
    })

    router.delete('/:collection/:item', async(req, res) => {
        const response = await service.delete(req.params.collection, req.params.item)
        res.status(response.status)
        res.json({
            ...response
        })
    })

    return router
}