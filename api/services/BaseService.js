module.exports = class BaseService {

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
        return {
            status: res.status,
            data: res.data
        }
    }

    error(error) {
        if (error.response) {
            return {
                status: error.response.status,
                error: {
                    code: error.response.status,
                    message: error.response.data || 'Error'
                }
            }
        } else {
            message = error.message
            return {
                status: status,
                error: {
                    code: 500,
                    message: error.message || 'Error'
                }
            }
        }
    }
}