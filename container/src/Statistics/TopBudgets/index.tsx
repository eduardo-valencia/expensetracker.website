import React from 'react'

import { links } from '../../constants/links'
import ListSection from '../ListSection'
import BudgetsList, { BudgetsListProps } from './BudgetsList'

interface Props extends Omit<BudgetsListProps, 'classes'> {}

function TopBudgets(props: Props) {
  return (
    <ListSection title="Top budgets" href={links.budgets}>
      <BudgetsList {...props} />
    </ListSection>
  )
}

export default TopBudgets
