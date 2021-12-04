import { Container } from '@material-ui/core'
import { max, min } from 'date-fns'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import fetchTransactionsTotal from '../actions/total'
import AppLayout from '../components/AppLayout'
import LoadingWrapper from '../components/LoadingWrapper'
import { IStatisticsRange } from '../components/RangeSelector/types'
import { useFetchBudgets } from '../hooks/budgets'
import { useFetchCategories } from '../hooks/categories'
import { useSetRange } from '../hooks/range'
import { useAppSelector } from '../hooks/selector'
import {
  useFetchTransactions,
  useFilterTransactionsByRange,
} from '../hooks/transactions'
import RootState from '../types/RootState'
import ITransaction from '../types/Transaction'
import { compareRanges, getYearRange } from '../utils/range'
import Graph from './Graph'
import StatisticsHero from './Hero'
import RecentTransactions from './RecentTransactions'
import TopBudgets from './TopBudgets'
import TopCategories from './TopCategories'
import Total from './Total'

const mapStateToProps = ({
  range,
  transactions,
  budgets,
  categories,
}: RootState) => {
  return { range, transactions, budgets, categories }
}

function Statistics() {
  const {
    range: transactionsRange,
    transactions,
    budgets,
    categories,
  } = useAppSelector(mapStateToProps)
  const fetchTransactions = useFetchTransactions()
  const fetchBudgets = useFetchBudgets()
  const fetchCategories = useFetchCategories()
  const setTransactionsRange = useSetRange()
  const filterTransactionsByRange = useFilterTransactionsByRange()

  const graphRange = getYearRange()
  const [range, setRange] = useState<IStatisticsRange>(graphRange)

  const setTransactionsRangeToDefaultRange = () => {
    setTransactionsRange(graphRange)
  }

  const combineRangeProperty = (
    range1: IStatisticsRange,
    range2: IStatisticsRange,
    property: keyof IStatisticsRange,
    getMinOrMax: typeof min
  ): Date | null => {
    const date1: Date | null = range1[property]
    const date2: Date | null = range2[property]
    if (date1 === null && date2 === null) return null
    else if (date1 === null || date2 === null) {
      return date1 || date2
    }
    return getMinOrMax([date1, date2])
  }

  const getCombinedRanges = (newRange: IStatisticsRange): IStatisticsRange => {
    return {
      minDate: combineRangeProperty(newRange, graphRange, 'minDate', min),
      maxDate: combineRangeProperty(newRange, graphRange, 'maxDate', max),
    }
  }

  const tryUpdatingTransactionsRange = (newRange: IStatisticsRange) => {
    const combinedRanges: IStatisticsRange = getCombinedRanges(newRange)
    const rangesAreDifferent: boolean = compareRanges(
      combinedRanges,
      transactionsRange
    )
    if (rangesAreDifferent) {
      setTransactionsRange(combinedRanges)
    }
  }

  const setRangeAndTryUpdatingTransactionsRange = (
    newRange: IStatisticsRange
  ): void => {
    tryUpdatingTransactionsRange(newRange)
    setRange(newRange)
  }

  useEffect(() => {
    fetchTransactions({ usePagination: false })
  }, [transactionsRange])

  useEffect(() => {
    fetchBudgets()
    fetchCategories()
    setTransactionsRangeToDefaultRange()
  }, [])

  const filteredTransactions: ITransaction[] = filterTransactionsByRange(range)
  const isLoading: boolean = !transactions || !categories || !budgets

  return (
    <AppLayout requireAuth>
      <Container maxWidth="md">
        <LoadingWrapper isLoading={isLoading}>
          <StatisticsHero
            range={range}
            setRange={setRangeAndTryUpdatingTransactionsRange}
          />
          <Total transactions={filteredTransactions} />
          <RecentTransactions transactions={filteredTransactions} />
          <TopBudgets transactions={filteredTransactions} />
          <TopCategories transactions={filteredTransactions} />
          <Graph />
        </LoadingWrapper>
      </Container>
    </AppLayout>
  )
}

export default Statistics
