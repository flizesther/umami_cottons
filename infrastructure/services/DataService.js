// DataServie is data structure of Firebase

export class DataService {

    constructor(http, url) {
        this.http = http
        this.url = url
    }

    async get(path) {
        const res = await this.http.get(this.buildPath(path))
        return await this.process(res)
    }

    // Firebase we need put to do a post
    async post(path, data) {
        const res = await this.http.put(this.buildPath(path), data)
        return await this.process(res)
    }

    async put(path, data) {
        const res = await this.http.put(this.buildPath(path), data)
        return await this.process(res)
    }

    async delete(path) {
        const res = await this.http.delete(this.buildPath(path))
        return await this.process(res)
    }

    buildPath(path) {
        return this.url + '/' + path + '.json'
    }

    async process(res) {
        try {
            const data = await res.json()
            return data ? data : {}
        } catch (err) {
            return {}
        }
    }
}