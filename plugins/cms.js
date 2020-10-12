import { CmsService } from '../infrastructure/services/CmsService';

export default ({ $http, $cms, $config: { API_BASE_URL_V2 } }, inject) => {
    const cms = !$cms ? new CmsService($http, { url: API_BASE_URL_V2 }) : $cms

    inject('cms', cms)
}