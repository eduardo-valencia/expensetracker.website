import { BudgetFilterState } from '../reducers/filters/budget'
import { SearchState } from '../reducers/search'
import IBill from './Bill'
import IBudget from './Budget'
import ICategory from './Category'
import ITransaction from './Transaction'
import { TransactionType } from './transactions'

export interface Range {
  minDate: Date | null
  maxDate: Date | null
}

interface RootState extends SearchState {
  total: number | number
  categories: ICategory[]
  categoryFilter: null | ICategory['_id']
  budgetFilter: BudgetFilterState
  budgets: null | IBudget[]
  bills: null | IBill[]
  transactionType: null | TransactionType
  range: Range
  transactions: null | ITransaction[]
}

export default RootState
