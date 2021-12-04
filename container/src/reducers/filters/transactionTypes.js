import { SET_TRANSACTION_TYPE } from '../../actions/types'

export const reduceTransactionType = (
  type = 'all',
  { payload, type: actionType }
) => (actionType === SET_TRANSACTION_TYPE ? payload : type)
