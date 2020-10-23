import { ApiService } from '../infrastructure/services/ApiService';

export default ({ $axios, $api, $config: { API_CLIENT_URL } }, inject) => {
    const api = !$api ? new ApiService($axios, { url: API_CLIENT_URL }) : $api

    inject('api', api)
}