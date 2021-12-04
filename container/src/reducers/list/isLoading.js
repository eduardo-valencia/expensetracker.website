import { SET_ARE_TRANSACTIONS_LOADING } from '../../actions/types'

const getIsLoadingReducer = expectedType => (
  isLoading = false,
  { type, payload }
) => {
  if (payload === expectedType) {
    return payload
  }
  return isLoading
}

export const reduceAreTransactionsLoading = getIsLoadingReducer(
  SET_ARE_TRANSACTIONS_LOADING
)
