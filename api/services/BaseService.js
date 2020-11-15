const Optional = require('./../util/Optional')

class BaseService {
  constructor(http) {
    this.http = http
  }

  async get(url) {
    try {
      const res = await this.http.get(url)
      return this._success(res)
    } catch (err) {
      return this._error(err)
    }
  }

  async post(url, data) {
    try {
      const res = await this.http.post(url, data)
      return this._success(res)
    } catch (err) {
      return this._error(err)
    }
  }

  async put(url, data) {
    try {
      const res = await this.http.put(url, data)
      return this._success(res)
    } catch (err) {
      return this._error(err)
    }
  }

  async delete(url) {
    try {
      const res = await this.http.delete(url)
      return this._success(res)
    } catch (err) {
      return this._error(err)
    }
  }

  _success(res) {
    return {
      status: res.status,
      data: res.data,
    }
  }

  _error(error) {
    let code = 500
    let message = 'Error'

    if (Optional.value(error) && Optional.value(error.response)) {
      // Request made and server responded 4xx or 5xx
      code = error.response.status
      message = Optional.value(error.response.data) || message
    } else if (Optional.value(error) && Optional.value(error.request)) {
      // The request was made but no response was received
      // eslint-disable-next-line no-console
      message = error.request
    } else {
      // Something happened in setting up the request that triggered an Error
      message = (Optional.value(error) && Optional.value(error.message)) || message
    }

    return {
      status: code,
      error: {
        code,
        message,
      },
    }
  }
}

module.exports = BaseService
