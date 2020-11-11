// BackupService is data service of Firebase

import BaseService from './BaseService'

export default class BackupService {
  constructor(http, { url }) {
    this.url = url
    this.httpService = new BaseService(http)
  }

  async all() {
    return await this.httpService.get(this.url + '/product.json')
  }
}
