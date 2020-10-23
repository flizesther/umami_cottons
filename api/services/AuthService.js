// AuthService is auth service of Firebase

import { BaseService } from './BaseService'

export class AuthService {

    constructor(http, { url = '', apiKey = '' }) {
        this.url = url
        this.apiKey = apiKey
        this.httpService = new BaseService(http)
    }

    async login({ email = '', password = '' }) {
        const response = await this.httpService.post(this.buildPath('accounts:signInWithPassword'), { email, password })
        if (response.status == 200) {
            return {
                status: response.status,
                data: {
                    email: response.data.email,
                    name: response.data.displayName,
                    token: response.data.idToken
                }
            }
        }
        return this.error(response)
    }

    async profile({ token = '' }) {
        const response = await this.httpService.post(this.buildPath('accounts:lookup'), { idToken: token })
        if (response.status == 200) {
            return {
                status: response.status,
                data: {
                    email: response.data.users[0].email,
                    name: response.data.users[0].displayName
                }
            }
        }
        return this.error(response)
    }

    buildPath(path) {
        return this.url + '/' + path + '?key=' + this.apiKey
    }

    error(response) {
        return {
            status: response.status,
            ...response.error.message
        }
    }

}