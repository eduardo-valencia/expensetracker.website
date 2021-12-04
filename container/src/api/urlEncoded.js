import qs from 'qs'
import { urlEncodedConfig } from './config'

export const getPartialUrlWithPayload = (url, payload) => {
  const urlEncodedPayload = qs.stringify(payload)
  return `/${url}?${urlEncodedPayload}`
}

export const getWithUrlEncodedPayload = (url, payload) => {
  const fullUrl = getPartialUrlWithPayload(url, payload)
  return urlEncodedConfig.get(fullUrl)
}
