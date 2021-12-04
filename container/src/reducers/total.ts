import {
  FETCH_TRANSACTIONS_TOTAL,
  FETCH_STATS_EXPENSE_TOTAL,
  FETCH_STATS_INCOME_TOTAL,
} from '../actions/types'
import RootState from '../types/RootState'

const reduceTransactionsTotal = (total = null, { type, payload }: any) => {
  return type === FETCH_TRANSACTIONS_TOTAL ? payload : total
}

export const selectTotal = ({ total }: RootState) => ({ total })

const getNewTotals = (type: any, totals: any, payload: any) => ({
  ...totals,
  [type]: payload,
})

export const reduceMonthTotals = (
  totals = { income: null, expense: null },
  { type, payload }: any
) => {
  switch (type) {
    case FETCH_STATS_EXPENSE_TOTAL:
      return getNewTotals('expense', totals, payload)
    case FETCH_STATS_INCOME_TOTAL:
      return getNewTotals('income', totals, payload)
    default:
      return totals
  }
}

export default reduceTransactionsTotal
