const express = require('express')
const StorageService = require('./services/StorageService')

module.exports = (config) => {
  const configStorage = {
    apiKey: config.API_KEY,
    projectId: config.PROJECT_ID,
    storageBucket: config.STORAGE_BUCKET,
  }

  const service = new StorageService(configStorage)

  const router = express.Router()

  router.get('/files', async (req, res) => {
    const path = req.query.path || ''

    const response =
      path === '' ? await service.getAll() : await service.getFile(path)

    res.status(response.status)
    res.json({
      ...response,
    })
  })

  router.get('/:type', async (req, res) => {
    const type = req.params.type
    const path = req.query.path || ''

    const response = await service.get(type, path)

    res.status(response.status)
    res.json({
      ...response,
    })
  })

  return router
}
