// AuthService is auth service of Firebase

import BaseService from './BaseService'

export default class AuthService {
  constructor(http, { url, apiKey }) {
    this.url = url
    this.apiKey = apiKey
    this.httpService = new BaseService(http)
  }

  async login({ email, password }) {
    const response = await this.httpService.post(this._buildPath('accounts:signInWithPassword'), { email, password })
    if (response.status === 200) {
      return {
        status: response.status,
        data: {
          email: response.data.email,
          name: response.data.displayName,
          token: response.data.idToken,
        },
      }
    }
    return this._error(response)
  }

  async profile({ token }) {
    const response = await this.httpService.post(this._buildPath('accounts:lookup'), { idToken: token })
    if (response.status === 200) {
      return {
        status: response.status,
        data: {
          email: response.data.users[0].email,
          name: response.data.users[0].displayName,
        },
      }
    }
    return this._error(response)
  }

  _buildPath(path) {
    return this.url + '/' + path + '?key=' + this.apiKey
  }

  _error(response) {
    return {
      status: response.status,
      error: {
        code: response.error.code,
        message: response.error.message?.error?.message || response.error.message,
      },
    }
  }
}
