import { SET_TRANSACTION_TYPE } from '../types'

export const setTransactionType = type => ({
  type: SET_TRANSACTION_TYPE,
  payload: type
})
