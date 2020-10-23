// BackupService is data service of Firebase

import { BaseService } from './BaseService'

export class BackupService {

    constructor(http, { url = '' }) {
        this.url = url
        this.httpService = new BaseService(http)
    }

    async all() {
        return await this.httpService.get(this.url + '/product.json')
    }

}