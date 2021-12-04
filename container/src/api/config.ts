import axios from 'axios'

import { getApiRoute, getAuthRoute } from '../utils/route'

const baseConfig = {
  withCredentials: true,
}

const configWithApiUrl = {
  ...baseConfig,
  baseURL: getApiRoute(''),
}

const apiConfig = axios.create(configWithApiUrl)

export const urlEncodedConfig = axios.create({
  ...configWithApiUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: null,
})

export const authConfig = axios.create({
  ...baseConfig,
  baseURL: getAuthRoute(''),
})

export default apiConfig
