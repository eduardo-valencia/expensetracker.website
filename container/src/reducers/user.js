import { SET_USER } from '../actions/types'

const reduceUser = (user = null, { type, payload }) => {
  if (type === SET_USER) {
    const userIsNotEmpty = Object.keys(payload).length !== 0
    if (userIsNotEmpty) return payload
    return false
  }
  return user
}

export default reduceUser
