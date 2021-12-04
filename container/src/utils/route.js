import { keys } from '../config/keys'

export const getBackendRoute = (subPath) => `${keys.backendUrl}/${subPath}`

export const getAuthRoute = (subPath) => getBackendRoute(`auth/${subPath}`)

export const getApiRoute = (subPath) => getBackendRoute(`api/${subPath}`)
