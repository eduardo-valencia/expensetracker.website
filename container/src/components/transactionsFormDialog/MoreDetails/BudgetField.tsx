import { Field } from 'react-final-form'

import { fieldNames } from '../../../constants/transactionsForm'
import IBudget from '../../../types/Budget'
import generateSelector from './Selector'

const BudgetInput = generateSelector<IBudget>({
  listKey: 'budgets',
  selectGroupProps: { id: 'budgets', label: 'Budget' },
})

const BudgetField = () => (
  <Field name={fieldNames.budget} render={BudgetInput} />
)

export default BudgetField
