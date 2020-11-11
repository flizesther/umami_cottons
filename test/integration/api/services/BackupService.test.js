import axios from 'axios'
import BackupService from '~/api/services/BackupService'
require('dotenv').config()

const config = {
  API_KEY: process.env.API_KEY,
  API_URL: process.env.API_URL,
}

const service = new BackupService(axios, {
  url: config.API_URL,
  apiKey: config.API_KEY,
})

describe('BackupService', () => {
  it('all', async () => {
    const expected = {
      status: 200,
      data: {},
    }

    const result = await service.all()

    expect(result).toHaveProperty('status', expected.status)
    expect(result.data).toMatchObject(expected.data)
  })
})
