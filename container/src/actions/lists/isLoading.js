import { SET_ARE_TRANSACTIONS_LOADING } from '../types'

const getIsLoadingSetter = type => isLoading => ({ type, payload: isLoading })

export const setAreTransactionsLoading = getIsLoadingSetter(
  SET_ARE_TRANSACTIONS_LOADING
)
