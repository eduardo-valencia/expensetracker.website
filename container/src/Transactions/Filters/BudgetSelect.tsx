import { setBudget } from '../../reducers/filters/budget'
import IBudget from '../../types/Budget'
import getFilterSelector from './FilterSelector'

const BudgetSelect = getFilterSelector<IBudget>({
  filterKey: 'budgetFilter',
  listKey: 'budgets',
  createAction: setBudget,
  selectGroupProps: { label: 'Budgets' },
})

export default BudgetSelect
