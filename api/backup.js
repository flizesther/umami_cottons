const axios = require('axios')
const express = require('express')
const BackupService = require('./services/BackupService').default

module.exports = (config) => {
  const service = new BackupService(axios, { url: config.API_URL })

  const router = express.Router()

  router.get('/all', async (req, res) => {
    const response = await service.all()
    res.status(response.status)
    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-disposition': 'attachment; filename=data.json',
    })
    res.end(JSON.stringify(response.status === 200 ? response.data : response.error))
  })

  return router
}
