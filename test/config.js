require('dotenv').config({ path: '.env.test' })

export const config = {
  API_KEY: process.env.API_KEY,
  API_URL: process.env.API_URL,
  API_AUTH_URL: process.env.API_AUTH_URL,
  PROJECT_ID: process.env.PROJECT_ID,
  STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  TEST_USER_EMAIL: process.env.TEST_USER_EMAIL,
  TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD,
}
