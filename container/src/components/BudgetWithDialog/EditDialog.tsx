import React from 'react'

import IBudget from '../../types/Budget'
import budgetRepo from '../../repos/budget'
import RecurringRecordEditDialog from '../RecurringRecordEditDialog'
import { useFetchBudgets } from '../../hooks/budgets'

interface Props {
  budget: IBudget
}

function EditDialog({ budget }: Props) {
  const fetchBudgets = useFetchBudgets()
  return (
    <RecurringRecordEditDialog
      itemInfo={budget}
      edit={budgetRepo.edit}
      title="Edit Budget"
      form={{ refreshList: fetchBudgets }}
    />
  )
}

export default EditDialog
