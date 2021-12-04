import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import EmptyList from './EmptyList'
import Loading from '../../components/LoadingIndicator'
import LoadingMore from './LoadingMore'
import Group from './Group'
import fetchTransactions, {
  fetchTransactionsPage,
} from '../../actions/lists/transaction'

const listClassName = 'transactions'

export class List extends Component {
  constructor(props) {
    super(props)
    this.observer = null
  }

  UNSAFE_componentWillMount() {
    const options = {
      threshold: 0,
    }
    this.observer = new IntersectionObserver(this.handleIntersect, options)
  }

  removeObservation = () => {
    const lastTransaction = this.getLastTransaction()
    if (lastTransaction) {
      this.observer.unobserve(lastTransaction)
    }
  }

  getLastTransaction = () =>
    document.querySelector(
      `.${listClassName} > li:last-child > ul > li:last-child`
    )

  observe = () => {
    this.removeObservation()
    const lastTransaction = this.getLastTransaction()
    if (lastTransaction) {
      this.observer.observe(lastTransaction)
    }
  }

  getIfTriggeredByLastElement = (target) => {
    const lastTransaction = this.getLastTransaction()
    return lastTransaction === target
  }

  getIfShouldFetchPage = ([{ isIntersecting, target }]) => {
    const triggeredByLast = this.getIfTriggeredByLastElement(target)
    const { hasNextPage, isLoading } = this.props
    return isIntersecting && triggeredByLast && hasNextPage && !isLoading
  }

  handleIntersect = (event) => {
    const { fetchTransactionsPage } = this.props
    const shouldFetchPage = this.getIfShouldFetchPage(event)
    if (shouldFetchPage) {
      this.removeObservation()
      fetchTransactionsPage()
    }
  }

  getRecord = (transactionData, index, Component, fetchList) => (
    <Component {...transactionData} key={index} fetchList={fetchList} />
  )

  getTransactionDate = (transaction) => {
    const date = new Date(transaction.date)
    // Reset anything smaller than a day so that dates are the same
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date.getTime()
  }

  groupTransactionsByDate = (transactions) => {
    return _.groupBy(transactions, this.getTransactionDate)
  }

  getListItems = (listKey, generateItem) => {
    const list = this.props[listKey]
    if (!list) return null
    return list.map(generateItem)
  }

  getGroupedListItems = (listKey, generateItem) => {
    const items = this.getListItems(listKey, generateItem)
    return this.groupTransactionsByDate(items)
  }

  getIfListShouldShow = () => {
    const { transactions, futureRecords } = this.props
    const transactionsExist = transactions && transactions.length
    const futureDataExists = futureRecords && futureRecords.length
    return transactionsExist || futureDataExists
  }

  renderGroup = ([date, items]) => {
    return <Group key={date} items={items} date={date} />
  }

  renderGroups = (items) => {
    const groupedItems = this.groupTransactionsByDate(items)
    const groupEntries = Object.entries(groupedItems)
    return groupEntries.map(this.renderGroup)
  }

  getTransactions = () => {
    const {
      transactions,
      futureRecords,
      range: { maxDate },
    } = this.props
    const today = new Date()
    const maxDateInFuture = maxDate === null || maxDate > today
    if (maxDateInFuture && futureRecords) {
      return [...futureRecords, ...transactions]
    }
    return transactions
  }

  renderTransactions = () => {
    const transactions = this.getTransactions()
    return this.renderGroups(transactions)
  }

  componentDidUpdate(prevProps) {
    if (this.props.transactions !== prevProps.transactions) {
      this.observe()
    }
  }

  render() {
    const { transactions } = this.props
    const renderedTransactions = this.renderTransactions()
    const listShouldShow = this.getIfListShouldShow()
    if (listShouldShow) {
      return (
        <>
          <ul className={listClassName}>{renderedTransactions}</ul>
          <LoadingMore />
        </>
      )
    } else if (transactions) {
      return <EmptyList />
    }
    return <Loading />
  }
}

const mapStateToProps = ({ areTransactionsLoading, transactions, range }) => {
  const transactionsList = transactions ? transactions.page : null
  return {
    ...transactions,
    isLoading: areTransactionsLoading,
    transactions: transactionsList,
    range,
  }
}

export default connect(mapStateToProps, {
  fetchTransactionsPage,
  fetchTransactions,
})(List)
