import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import List from './List'
import Total from './Total'
import ListPage from '../components/shared/ListPage'
import ListError from '../components/shared/Errors/List'
import { TransactionsContext } from '../contexts/TransactionsContext'
import FilterIconButton from './FilterIconButton'
import Filters from './Filters'
import Toolbar from './Toolbar'
import TransactionsCreationDialog from './CreationDialog'
import Hero from '../components/Hero'
import ExpandableSearch from '../components/ExpandableSearch'

import fetchTransactions from '../actions/lists/transaction'
import fetchBudgetsList from '../actions/lists/budgets'
import fetchBillsList from '../actions/lists/bills'
import fetchCategories from '../actions/lists/categories'
import { getIfIsScheduledForDate } from '../utils/dates/isDue'
import { getCompatibleDates } from '../utils/dates/range'
import fetchTransactionsTotal from '../actions/total'
import RootState, { Range } from '../types/RootState'
import ITransaction from '../types/Transaction'
import IBudget from '../types/Budget'
import IBill from '../types/Bill'

type TRangeProperty = Range[keyof Range]
type TRecurringRecordList = IBill[] | IBudget[]

const getDateStringAsDateIfExists = (dateString: TRangeProperty): null | Date =>
  dateString ? new Date(dateString) : null

const getRangeAsDates = (
  minDateString: TRangeProperty,
  maxDateString: TRangeProperty
): Range => {
  const minDate = getDateStringAsDateIfExists(minDateString)
  const maxDate = getDateStringAsDateIfExists(maxDateString)
  return { minDate, maxDate }
}

const mapStateToProps = ({
  transactions,
  bills,
  budgets,
  range: { minDate, maxDate },
  total,
  categories,
}: RootState) => {
  const range = getRangeAsDates(minDate, maxDate)
  return {
    transactions,
    bills,
    budgets,
    range,
    total,
    categories,
  }
}

const connector = connect(mapStateToProps, {
  fetchTransactions,
  fetchBudgetsList,
  fetchBillsList,
  fetchCategories,
  fetchTransactionsTotal,
})

interface Props extends ConnectedProps<typeof connector> {}

interface KeyToFetcher {
  key: 'transactions' | 'budgets' | 'bills' | 'categories' | 'total'
  fetchList: () => Promise<void>
}

type TRecurringRecord = IBudget | IBill

interface IRecurringRecordType {
  transaction: ITransaction['type']
  list: 'bills' | 'budgets'
}

export class Transactions extends Component<Props> {
  getKeysToFetchers = (): KeyToFetcher[] => {
    const {
      fetchTransactions,
      fetchBudgetsList,
      fetchBillsList,
      fetchCategories,
      fetchTransactionsTotal,
    } = this.props
    return [
      { key: 'transactions', fetchList: fetchTransactions },
      { key: 'budgets', fetchList: fetchBudgetsList },
      { key: 'bills', fetchList: fetchBillsList },
      { key: 'categories', fetchList: fetchCategories },
      { key: 'total', fetchList: fetchTransactionsTotal },
    ]
  }

  fetchData = (): void => {
    const keysToFetchers: KeyToFetcher[] = this.getKeysToFetchers()
    keysToFetchers.forEach(({ key, fetchList }: KeyToFetcher) => {
      const itemInState = this.props[key]
      if (
        typeof itemInState !== 'number' &&
        (!itemInState || itemInState.length === 0)
      ) {
        fetchList()
      }
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  getIfFutureDateSelected = (): boolean => {
    const {
      range: { minDate, maxDate },
    } = this.props
    if (!minDate || !maxDate) return false
    const today = new Date()
    return minDate > today || maxDate > today
  }

  getRecord(
    { name, _id, amount }: TRecurringRecord,
    type: ITransaction['type'],
    records: ITransaction[]
  ): ITransaction[] {
    const {
      range: { minDate },
    } = this.props
    const record: ITransaction = {
      name,
      _id,
      amount,
      type,
      date: minDate!.toISOString(),
    }
    return [record, ...records]
  }

  reduceRecordIfScheduled =
    (type: ITransaction['type'], recurringRecord: TRecurringRecord) =>
    (records: ITransaction[], date: Date): ITransaction[] => {
      const { interval, startDate } = recurringRecord
      const isScheduled: boolean = getIfIsScheduledForDate(
        date,
        interval as any,
        startDate
      )
      if (isScheduled) {
        return this.getRecord(recurringRecord, type, records)
      }
      return records
    }

  reduceRecurringRecord =
    (type: ITransaction['type']) =>
    (
      records: ITransaction[],
      recurringRecord: TRecurringRecord
    ): ITransaction[] => {
      const startDate: Date = new Date(recurringRecord.startDate)
      const {
        range: { minDate, maxDate },
      } = this.props
      const compatibleDates: Date[] = getCompatibleDates(
        startDate,
        minDate,
        maxDate
      )
      const scheduledRecords: ITransaction[] = compatibleDates.reduce(
        this.reduceRecordIfScheduled(type, recurringRecord),
        []
      )
      return [...records, ...scheduledRecords]
    }

  reduceListType = () => {
    return (
      futureData: ITransaction[],
      { list, transaction: transactionType }: IRecurringRecordType
    ): ITransaction[] => {
      const recurringRecordList: TRecurringRecordList = this.props[list] || []
      const futureDataForList: ITransaction[] = recurringRecordList.reduce(
        this.reduceRecurringRecord(transactionType),
        []
      )
      return [...futureData, ...futureDataForList]
    }
  }

  getFutureData = (): ITransaction[] => {
    const recurringTypes: IRecurringRecordType[] = [
      { transaction: 'income', list: 'budgets' },
      { transaction: 'expense', list: 'bills' },
    ]
    return recurringTypes.reduce(this.reduceListType(), [])
  }

  getListDataWithFutureData(transactions: RootState['transactions']) {
    const futureData: ITransaction[] = this.getFutureData()
    return { futureRecords: futureData, transactions }
  }

  getListData = () => {
    const { transactions, bills, budgets } = this.props
    const futureDateSelected: boolean = this.getIfFutureDateSelected()
    const recurringRecordList = bills || budgets
    if (recurringRecordList && futureDateSelected) {
      return this.getListDataWithFutureData(transactions)
    }
    return { transactions, futureRecords: null }
  }

  render() {
    const { transactions, futureRecords } = this.getListData()
    const { fetchTransactions } = this.props
    const ListWithTypes = List as unknown as React.FunctionComponent<any>
    return (
      <ListPage navProps={{ right: <ExpandableSearch /> }}>
        <TransactionsContext.Provider value={{ fetchTransactions }}>
          <Hero title="Transactions" right={<FilterIconButton />} />
          <Toolbar />
          <Total />
          <ListError>
            <ListWithTypes
              transactions={transactions}
              futureRecords={futureRecords}
            />
          </ListError>
          <Filters />
          <TransactionsCreationDialog />
        </TransactionsContext.Provider>
      </ListPage>
    )
  }
}

export default connector(Transactions)
