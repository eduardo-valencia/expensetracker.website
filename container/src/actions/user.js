import { SET_USER } from './types'
import CacheFirstGenerator from './lists/generators/CacheFirst'
import getUserData from '../api/user'

export const fetchAndSetUser = () => (dispatch) => {
  const id = 'user'
  const generator = new CacheFirstGenerator(
    getUserData,
    SET_USER,
    dispatch,
    id,
    '/expenseTracker/api/user'
  )
  return generator.getItems()
}
