import { useDispatch } from 'react-redux'

import fetchTransactions from '../actions/lists/transaction'
import { IStatisticsRange } from '../components/RangeSelector/types'
import { selectTransactions } from '../reducers/transaction'
import ITransaction from '../types/Transaction'
import { useAppSelector } from './selector'

interface Options {
  usePagination?: boolean
}

export const useFetchTransactions = () => {
  const dispatch = useDispatch()
  return (options: Options = {}) => dispatch(fetchTransactions(options))
}

export const useFilterTransactionsByRange = () => {
  const { transactions } = useAppSelector(selectTransactions)

  return ({ minDate, maxDate }: IStatisticsRange): ITransaction[] => {
    const getIfTransactionInRange = (transaction: ITransaction): boolean => {
      const date: Date = new Date(transaction.date)
      if (!minDate || !maxDate)
        throw new Error(`Invalid range of ${minDate} - ${maxDate}`)
      return date >= minDate && date <= maxDate
    }

    if (!transactions) return []
    return transactions.filter(getIfTransactionInRange)
  }
}
