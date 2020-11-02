// ApiService is a client service

import { HttpService } from './HttpService'

export class ApiService {

    constructor(http, { url = '' }) {
        this.url = url
        this.httpService = new HttpService(http)
    }

    async collectionIndex(path) {
        const response = await this.httpService.get(this.buildPath(`collection/${path}`))
        const data = response.data ? Object.values(response.data) : response.data
        return {...response, data: data }
    }

    async collectionGet(path, code) {
        return await this.httpService.get(this.buildPath(`collection/${path}/${code}`))
    }

    async collectionCreate(path, data) {
        return await this.httpService.post(this.buildPath(`collection/${path}/${data.code}`), data)
    }

    async collectionUpdate(path, data) {
        return await this.httpService.put(this.buildPath(`collection/${path}/${data.code}`), data)
    }

    async collectionDelete(path, code) {
        return await this.httpService.delete(this.buildPath(`collection/${path}/${code}`))
    }

    async authLogin(data) {
        return await this.httpService.post(this.buildPath('auth/login'), data)
    }

    async authLogout(data) {
        return await this.httpService.post(this.buildPath('auth/logout'), data)
    }

    async authProfile(data) {
        return await this.httpService.post(this.buildPath('auth/profile'), data)
    }

    async storageIndex(path = '') {
        return await this.httpService.get(this.buildPath(`storage/files?path=${path}`))
    }

    backupAll() {
        return this.buildPath('backup/all')
    }

    buildPath(path) {
        return this.url + '/' + path
    }

}