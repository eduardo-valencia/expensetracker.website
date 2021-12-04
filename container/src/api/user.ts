import IUser from '../types/User'
import apiConfig from './config'

type UserResponse = { user: IUser } | {}

const getUserData = async () => await apiConfig.get<UserResponse>('/user')

export default getUserData
