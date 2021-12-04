import { SET_CATEGORY_FILTER } from '../../actions/types'

export const reduceCategory = (category = null, { type, payload }) => {
  return type === SET_CATEGORY_FILTER ? payload : category
}
