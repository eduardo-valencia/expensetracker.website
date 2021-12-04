import { SET_QUERY, SET_IS_SEARCH_EXPANDED } from '../actions/types'

export interface SearchState {
  isSearchExpanded: boolean
  query: string
}

export const reduceQuery = (query = '', { payload, type }: any) => {
  if (type === SET_QUERY) {
    return payload
  }
  return query
}

export const reduceIsExpanded = (
  isExpanded = false,
  { payload, type }: any
) => {
  if (type === SET_IS_SEARCH_EXPANDED) {
    return payload
  }
  return isExpanded
}
