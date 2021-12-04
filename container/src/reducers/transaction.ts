import { FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_PAGE } from '../actions/types'
import RootState from '../types/RootState'

const combinePages = (list: any = [], payload: any) => {
  console.log(list, payload)
  return {
    ...payload,
    page: [...list.page, ...payload.page],
  }
}

const reduceTransactions = (list = null, action: any) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_TRANSACTIONS_PAGE:
      return combinePages(list, payload)
    case FETCH_TRANSACTIONS:
      return action.payload
    default:
      return list
  }
}

export const selectTransactions = ({ transactions }: RootState) => ({
  transactions,
})

export default reduceTransactions
