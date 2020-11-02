// CollectionService is realtime data service of Firebase

import { BaseService } from './BaseService'
import { Factory } from '../util/Factory'

export class CollectionService {

    constructor(http, { url = '' }) {
        this.url = url
        this.httpService = new BaseService(http)
    }

    async getAll(path) {
        return await this._get(path)
    }

    async get(path, code) {
        return await this._get(path, code)
    }

    // Firebase we need put to do a post
    async create(path, data) {
        return await this.update(path, Factory.new(path, data))
    }

    async update(path, data) {
        return await this.httpService.put(this.buildPath(`${path}/${data.code}`), Factory.new(path, data))
    }

    async delete(path, code) {
        return await this.httpService.delete(this.buildPath(`${path}/${code}`))
    }

    async _get(path, code = '') {
        const response = await this.httpService.get(this.buildPath(code != '' ? `${path}/${code}` : path))

        // Fix return null text firebase when no exit path item with status 200 -> changed with 404
        if (response.status == 200 && (response.data == 'null' || response.data == null)) {
            return {
                status: 404,
                error: {
                    code: 404,
                    message: 'Not found'
                }
            }
        }

        return response
    }

    buildPath(path) {
        return this.url + '/' + path + '.json'
    }

}