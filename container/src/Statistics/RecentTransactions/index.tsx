import React from 'react'

import { links } from '../../constants/links'
import ListSection from '../ListSection'
import TransactionsList, { TransactionsListProps } from './TransactionsList'

interface Props extends TransactionsListProps {}

function RecentTransactions(props: Props) {
  return (
    <ListSection title="Recent transactions" href={links.transactions}>
      <TransactionsList {...props} />
    </ListSection>
  )
}

export default RecentTransactions
