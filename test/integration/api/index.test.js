import { config } from '../../config'
const request = require('supertest')

const app = require('../../../api/index')

describe('Api', () => {
  test('GET health', async () => {
    const response = await request(app).get('/health')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ status: 200 })
  })

  test('GET auth/login', async () => {
    const response = await request(app).post('/auth/login').send({
      email: config.TEST_USER_EMAIL,
      password: config.TEST_USER_PASSWORD,
    })
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({ status: 200, data: {} })
  })
})
