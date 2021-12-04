import { DonutLarge } from '@material-ui/icons'
import React from 'react'

import { useAppSelector } from '../../../hooks/selector'
import { selectBudgetWithId } from '../../../reducers/list/budgets'
import IBudget from '../../../types/Budget'
import Field from '../../InformationDialog/Field'

interface Props {
  budgetId: IBudget['_id']
}

export default function BudgetField({ budgetId }: Props) {
  const budget = useAppSelector(selectBudgetWithId(budgetId))
  if (!budget) return null
  return <Field title="Budget" value={budget.name} endIcon={<DonutLarge />} />
}
