// DataServie is data structure of Firebase

export class DataService {

    constructor(http, url) {
        this.http = http
        this.url = url
    }

    async get(path) {
        const res = await this.http.get(this.buildPath(path))
        return await res.json()
    }

    // Firebase we need put to do a post
    async post(path, data) {
        const res = await this.http.put(this.buildPath(path), data)
        return await res.json()
    }

    async put(path, data) {
        const res = await this.http.put(this.buildPath(path), data)
        return await res.json()
    }

    async delete(path) {
        const res = await this.http.delete(this.buildPath(path))
        return await res.json()
    }

    buildPath(path) {
        return this.url + '/' + path + '.json'
    }
}