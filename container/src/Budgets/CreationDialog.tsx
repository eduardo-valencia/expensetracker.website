import React from 'react'

import budgetRepo from '../repos/budget'
import RecurringRecordCreationDialog from '../components/RecurringRecordCreationDialog'
import { useFetchBudgets } from '../hooks/budgets'

function BudgetsCreationDialog() {
  const fetchBudgets = useFetchBudgets()
  return (
    <RecurringRecordCreationDialog
      title="Add Budget"
      formProps={{ submit: budgetRepo.create, refreshList: fetchBudgets }}
    />
  )
}

export default BudgetsCreationDialog
