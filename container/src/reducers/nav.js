import { SET_NAV_VISIBILITY } from '../actions/types'

const reduceNavVisibility = (isShown = false, { payload, type }) => {
  if (type === SET_NAV_VISIBILITY) {
    return payload
  }
  return isShown
}

export default reduceNavVisibility
