import axios from 'axios'
import emailErrorResponse from '../../../fixtures/api/services/AuthServiceErrorEmailResponse'
import passwordErrorResponse from '../../../fixtures/api/services/AuthServiceErrorPasswordResponse'
import tokenErrorResponse from '../../../fixtures/api/services/AuthServiceErrorTokenResponse'
import AuthService from '~/api/services/AuthService'
require('dotenv').config()

const config = {
  API_KEY: process.env.API_KEY,
  API_AUTH_URL: process.env.API_AUTH_URL,
}

const authService = new AuthService(axios, {
  url: config.API_AUTH_URL,
  apiKey: config.API_KEY,
})

let user = {
  email: 'jh2odo@gmail.com',
  password: '123456',
  name: 'Test Name',
  token: '',
}

describe('AuthService success', () => {
  it('login', async () => {
    const data = {
      email: user.email,
      password: user.password,
    }
    const expected = {
      status: 200,
      data: {
        email: user.email,
        name: user.name,
        token: user.token,
      },
    }

    const result = await authService.login(data)

    user = {
      ...user,
      token: result.data.token,
    }

    expect(result).toHaveProperty('status', expected.status)
    expect(result).toHaveProperty('data.email', expected.data.email)
    expect(result).toHaveProperty('data.name', expected.data.name)
    expect(result).toHaveProperty('data.token')
  })

  it('profile', async () => {
    const data = {
      token: user.token,
    }
    const expected = {
      status: 200,
      data: {
        email: user.email,
        name: user.name,
      },
    }

    const result = await authService.profile(data)

    expect(result).toEqual(expected)
  })
})

describe('AuthService error', () => {
  it('login with invalid email', async () => {
    const data = {
      email: 'email',
      password: 'password',
    }

    const result = await authService.login(data)

    expect(result).toEqual(emailErrorResponse)
  })

  it('login with invalid password', async () => {
    const data = {
      email: user.email,
      password: 'password',
    }

    const result = await authService.login(data)

    expect(result).toEqual(passwordErrorResponse)
  })

  it('profile with invalid token', async () => {
    const data = {
      token: '',
    }

    const result = await authService.profile(data)

    expect(result).toEqual(tokenErrorResponse)
  })
})
