import React from 'react'

import { useFetchBudgets } from '../../hooks/budgets'
import RecurringRecordForm, {
  RecurringRecordFormProps,
} from '../RecurringRecordForm'

interface Props extends Omit<RecurringRecordFormProps, 'refreshList'> {}

function BudgetsForm(props: Props) {
  const fetchBudgets = useFetchBudgets()

  return <RecurringRecordForm refreshList={fetchBudgets} {...props} />
}

export default BudgetsForm
