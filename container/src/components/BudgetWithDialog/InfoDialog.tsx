import React from 'react'

import fetchBudgetsList from '../../actions/lists/budgets'
import { apiSubRoutes } from '../../constants/links'
import IBudget from '../../types/Budget'
import RecurringRecordInfoDialog from '../RecurringRecordInfoDialog'

interface Props {
  budget: IBudget
}

function BudgetInfoDialog({ budget }: Props) {
  return (
    <RecurringRecordInfoDialog
      itemInfo={budget}
      apiRouteId={apiSubRoutes.budgets}
      createRefreshListAction={fetchBudgetsList}
    />
  )
}

export default BudgetInfoDialog
