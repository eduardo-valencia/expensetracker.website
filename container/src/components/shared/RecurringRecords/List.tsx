import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import List, { ListProps } from '../List'
import fetchBillsList from '../../../actions/lists/bills'
import fetchBudgetsList from '../../../actions/lists/budgets'
import Hero from '../../Hero'
import RootState from '../../../types/RootState'
import { Dispatch } from 'redux'
import IBudget from '../../../types/Budget'
import IBill from '../../../types/Bill'

type TItemProps = IBudget | IBill

interface IBaseProps extends Pick<ListProps, 'placeholder'> {
  recordLabel: string
  routeId: 'budgets' | 'bills'
  Item: React.FunctionComponent<TItemProps>
}

const mapStateToProps = (state: RootState, ownProps: IBaseProps) => {
  const { routeId: listType } = ownProps
  const list = state[listType]
  return { list }
}

const mapDispatchToProps = (
  dispatch: Dispatch,
  { routeId: listType }: IBaseProps
) => {
  const fetchList = listType === 'bills' ? fetchBillsList : fetchBudgetsList
  return { fetchList: () => fetchList()(dispatch) }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector>, IBaseProps {}

class RecordsList extends Component<Props> {
  componentDidMount() {
    const { fetchList } = this.props
    fetchList()
  }

  getListItem = () => {
    const { Item } = this.props
    return (itemProps: TItemProps) => <Item {...itemProps} />
  }

  render() {
    const { list, fetchList, recordLabel, ...other } = this.props

    const title = `${recordLabel}s`

    return (
      <div className="recurring-records">
        <Hero title={title} />
        <List
          {...other}
          fetchList={fetchList}
          ListItem={this.getListItem()}
          sortList
        ></List>
      </div>
    )
  }
}

export default connector(RecordsList)
