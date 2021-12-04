import { AxiosResponse } from 'axios'

import { authConfig } from './config'
import Credentials from './types/Credentials'
import User from './types/User'

export type AuthRequestCreator = (
  credentials: Credentials
) => Promise<AxiosResponse<User>>

const getAuthRequestCreator =
  (route: string): AuthRequestCreator =>
  async (credentials: Credentials): Promise<AxiosResponse<User>> => {
    return authConfig.post(route, credentials)
  }

export const signIn = getAuthRequestCreator('/local/callback')

export const signUp = getAuthRequestCreator('/signup')
