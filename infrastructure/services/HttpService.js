export class HttpService {
  constructor(http) {
    this.http = http
  }

  async get(url) {
    try {
      const res = await this.http.get(url)
      return this.success(res)
    } catch (err) {
      return this.error(err)
    }
  }

  async post(url, data) {
    try {
      const res = await this.http.post(url, data)
      return this.success(res)
    } catch (err) {
      return this.error(err)
    }
  }

  async put(url, data) {
    try {
      const res = await this.http.put(url, data)
      return this.success(res)
    } catch (err) {
      return this.error(err)
    }
  }

  async delete(url) {
    try {
      const res = await this.http.delete(url)
      return this.success(res)
    } catch (err) {
      return this.error(err)
    }
  }

  success(res) {
    // eslint-disable-next-line no-console
    console.log('success', res)
    return res.data
  }

  error(error) {
    // eslint-disable-next-line no-console
    console.log('error', error)
    if (error.response) {
      return error.response.data || 'Error'
    } else {
      return error.message || 'Error'
    }
  }
}
