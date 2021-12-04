import { AxiosResponse } from 'axios'
import { authConfig } from './config'

interface Credentials {
  username: string
  password: string
}

const logIn = async (credentials: Credentials): Promise<AxiosResponse<any>> => {
  return authConfig.post('/local/callback', credentials)
}

export default logIn
