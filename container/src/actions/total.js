import {
  FETCH_TRANSACTIONS_TOTAL,
  FETCH_STATS_EXPENSE_TOTAL,
  FETCH_STATS_INCOME_TOTAL
} from './types'
import { getMonthRange } from '../utils/range'
import {
  getPartialUrlWithPayload,
  getWithUrlEncodedPayload
} from '../api/urlEncoded'
import CacheFirstGenerator from './lists/generators/CacheFirst'

const url = 'total'

const fetchTotal = async filters => getWithUrlEncodedPayload(url, filters)

const fetchAndDispatchTotals = (fetchTotal, payload, type, dispatch) => {
  const cacheKey = getPartialUrlWithPayload(url, payload)
  const generator = new CacheFirstGenerator(
    fetchTotal,
    type,
    dispatch,
    'totals',
    cacheKey
  )
  return generator.getItems()
}

const fetchTransactionsTotal = (
  filters = { type: 'all' }
) => async dispatch => {
  const fetch = () => fetchTotal(filters)
  return fetchAndDispatchTotals(
    fetch,
    filters,
    FETCH_TRANSACTIONS_TOTAL,
    dispatch
  )
}

function getFilters(ownProps, type) {
  const range = getMonthRange(ownProps().statsMonth)
  const filters = { ...range, type }
  return filters
}

const fetchAndDispatchMonthTotal = (expenseType, type, ownProps, dispatch) => {
  const filters = getFilters(ownProps, expenseType)
  const makeRequest = () => fetchTotal(filters)
  return fetchAndDispatchTotals(makeRequest, filters, type, dispatch)
}

const dispatchExpense = (dispatch, ownProps) =>
  fetchAndDispatchMonthTotal(
    'expense',
    FETCH_STATS_EXPENSE_TOTAL,
    ownProps,
    dispatch
  )

const dispatchIncome = (dispatch, ownProps) =>
  fetchAndDispatchMonthTotal(
    'income',
    FETCH_STATS_INCOME_TOTAL,
    ownProps,
    dispatch
  )

export const fetchMonthTotals = () => async (dispatch, ownProps) => {
  dispatchExpense(dispatch, ownProps)
  dispatchIncome(dispatch, ownProps)
}

export default fetchTransactionsTotal
