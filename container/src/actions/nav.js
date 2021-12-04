import { SET_NAV_VISIBILITY } from './types'

export const setNavVisibility = isShown => ({
  type: SET_NAV_VISIBILITY,
  payload: isShown
})
