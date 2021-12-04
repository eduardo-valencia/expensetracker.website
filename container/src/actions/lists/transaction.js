import { FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_PAGE } from '../types'
import { getNextMonth } from '../../utils/dates/date'
import { setAreTransactionsLoading } from './isLoading'
import fetchTransactionsTotal from '../total'
import CacheFirstGenerator from './generators/CacheFirst'
import { fetchTransactions as fetchTransactionsConfig } from '../../api/transactions'
import { getPartialUrlWithPayload } from '../../api/urlEncoded'

const reduceRangeType = (rangeValues, range, rangeType) => {
  if (rangeValues.hasOwnProperty(rangeType)) {
    return { ...range, [rangeType]: rangeValues[rangeType] }
  }
  return range
}

const getRange = (minDate, maxDate) => {
  const rangeValues = { minDate, maxDate }
  const rangeTypes = ['minDate', 'maxDate']
  return rangeTypes.reduce(
    (range, rangeType) => reduceRangeType(rangeValues, range, rangeType),
    {}
  )
}

const getBasePayload = ({
  query,
  transactionType,
  categoryFilter,
  budgetFilter,
}) => {
  return {
    type: transactionType,
    query,
    category: categoryFilter,
    budget: budgetFilter,
  }
}

const getIfHasPrevPosition = ({ transactions }) => {
  return transactions && transactions.hasOwnProperty('position')
}

const getPosition = (ownProps, type) => {
  const hasPrevPosition = getIfHasPrevPosition(ownProps)
  if (type === FETCH_TRANSACTIONS_PAGE && hasPrevPosition) {
    return ownProps.transactions.position
  }
  return 0
}

const getPayloadWithPosition = (basePayload, ownProps, type) => {
  const position = getPosition(ownProps, type)
  return {
    ...basePayload,
    position,
  }
}

const getTransactionsPayload = (ownProps) => {
  const basePayload = getBasePayload(ownProps)
  const { minDate, maxDate } = ownProps.range
  const fullRange = getRange(minDate, maxDate)
  const newPayload = {
    ...basePayload,
    ...fullRange,
  }
  return newPayload
}

const getIfValueIsValid = (value) => {
  const isNull = value === null
  const isUndefined = value === undefined
  return value !== '' && !isNull && !isUndefined
}

const reducePayloadEntry = (validPayload, [key, value]) => {
  const isValid = getIfValueIsValid(value)
  if (!isValid) return validPayload
  return {
    ...validPayload,
    [key]: value,
  }
}

const filterEmptyPayloadValues = (payload) => {
  const entries = Object.entries(payload)
  return entries.reduce(reducePayloadEntry, {})
}

const getStatsPayload = (ownProps) => {
  const basePayload = getBasePayload(ownProps)
  const { statsMonth } = ownProps
  const maxDate = getNextMonth(statsMonth)
  return {
    ...basePayload,
    minDate: statsMonth,
    maxDate,
  }
}

const dispatchSetIsLoading = (dispatch, isLoading) =>
  dispatch(setAreTransactionsLoading(isLoading))

async function makeRequest(dispatch, payload) {
  dispatchSetIsLoading(dispatch, true)
  const response = await fetchTransactionsConfig(payload)
  dispatchSetIsLoading(dispatch, false)
  return response
}

const getUrlWithData = (payload) => {
  const partialUrl = getPartialUrlWithPayload(payload)
  return `/expenseTracker/api${partialUrl}`
}

export const getGenerator = (type, dispatch, payload) => {
  const fetch = () => makeRequest(dispatch, payload)
  const cacheKey = getUrlWithData(payload)
  return new CacheFirstGenerator(
    fetch,
    type,
    dispatch,
    'transactions',
    cacheKey
  )
}

const fetchTransactionsAndDispatch = (dispatch, ownProps, getPayload, type) => {
  const basePayload = getPayload(ownProps(), type)
  const validPayload = filterEmptyPayloadValues(basePayload)
  const generator = getGenerator(type, dispatch, validPayload)
  return generator.getItems()
}

const getDispatcher = (type) => (getPayload) => async (dispatch, ownProps) => {
  try {
    await fetchTransactionsAndDispatch(dispatch, ownProps, getPayload, type)
  } catch (err) {
    console.error(err)
  }
}

const fetchTransactionsWithPayload = getDispatcher(FETCH_TRANSACTIONS)

const fetchNewPage = getDispatcher(FETCH_TRANSACTIONS_PAGE)

const getTransactionsPayloadGenerator = ({ usePagination = true } = {}) => {
  return (ownProps, type) => {
    const payload = getTransactionsPayload(ownProps, type)
    if (usePagination) {
      return getPayloadWithPosition(payload, ownProps, type)
    }
    return payload
  }
}

/**
 * Also overwrites the total
 */
const fetchTransactions =
  (options = {}) =>
  (dispatch, ownProps) => {
    fetchTransactionsTotal()(dispatch)
    return fetchTransactionsWithPayload(
      getTransactionsPayloadGenerator(options)
    )(dispatch, ownProps)
  }

export const fetchStatsTransactions = () =>
  fetchTransactionsWithPayload(getStatsPayload)

export const fetchTransactionsPage = () => {
  return fetchNewPage(getTransactionsPayloadGenerator())
}

export default fetchTransactions
