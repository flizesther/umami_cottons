import { DataService } from './DataService'
import { Factory } from "../util/Factory";

export class CmsService {

    constructor(http, { url = '' }) {
        this.dataService = new DataService(http, url)
    }

    async getAll(path, mode = 'list') {
        return await this._get(path, { mode: mode })
    }

    async get(path, code) {
        const data = await this._get(path, { code: code })
        return Factory.new(path, data)
    }

    async create(path, data) {
        return await this.dataService.post(`${path}/${data.code}`, data)
    }

    async update(path, data) {
        return await this.dataService.put(`${path}/${data.code}`, data)
    }

    async delete(path, code) {
        return await this.dataService.delete(`${path}/${code}`)
    }

    async _get(path, { code = '', mode = '' }) {
        const data = await this.dataService.get(code != '' ? `${path}/${code}` : path)
        return mode == 'list' ? Object.values(data) : data
    }

}