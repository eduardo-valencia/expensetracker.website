import { SET_QUERY, SET_IS_SEARCH_EXPANDED } from './types'

export const setQuery = query => ({
  type: SET_QUERY,
  payload: query
})

export const setIsExpanded = isExpanded => ({
  type: SET_IS_SEARCH_EXPANDED,
  payload: isExpanded
})
