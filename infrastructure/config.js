const API_V1_URL_BASE = 'https://umami-a6083.firebaseio.com'
const API_V2_URL_BASE = 'https://umami-a6083.firebaseio.com/v2'
const DEBUG_ENABLE = process && process.env && process.env.DEBUG_ENABLE || false

export { API_V1_URL_BASE, API_V2_URL_BASE, DEBUG_ENABLE }