import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import Loading from '../../LoadingIndicator'
import getNextDueDate from '../../../utils/dates/nextDue'
import RootState from '../../../types/RootState'
import IRecurringRecord from '../../../types/RecurringRecord'

interface BaseProps {
  ListItem: React.FunctionComponent<any>
  placeholder: React.ReactNode
  sortList: boolean
  routeId: 'transactions' | 'categories' | 'budgets' | 'bills'
  fetchList: () => Promise<void>
}

const mapStateToProps = (state: RootState, ownProps: BaseProps) => ({
  list: state[ownProps.routeId],
})

const connector = connect(mapStateToProps)

export interface ListProps
  extends ConnectedProps<typeof connector>,
    BaseProps {}

class List extends Component<ListProps> {
  fetchAndSetList = async () => {
    const { fetchList } = this.props
    await fetchList()
  }

  componentDidMount() {
    this.fetchAndSetList()
  }

  getNextDueFromDateString = ({ interval, startDate }: IRecurringRecord) => {
    return getNextDueDate(interval, null, new Date(startDate))
  }

  getListSortedByNextDue = () => {
    const { list } = this.props
    return (list as IRecurringRecord[]).sort(
      (recurringRecord1, recurringRecord2) => {
        const nextDue1 = this.getNextDueFromDateString(recurringRecord1)
        const nextDue2 = this.getNextDueFromDateString(recurringRecord2)
        return nextDue1.getTime() - nextDue2.getTime()
      }
    )
  }

  getListItems = () => {
    const { ListItem, sortList } = this.props
    const list = sortList ? this.getListSortedByNextDue() : this.props.list
    return list!.map((listData: any, index: number) => (
      <ListItem {...listData} updateList={this.fetchAndSetList} key={index} />
    ))
  }

  render() {
    const { placeholder, list } = this.props

    if (list && list.length) {
      const listItems = this.getListItems()
      return <ul>{listItems}</ul>
    } else if (list) {
      return placeholder
    }
    return <Loading />
  }
}

export default connector(List)
