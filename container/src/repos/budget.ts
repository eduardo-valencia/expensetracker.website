import { apiSubRoutes } from '../constants/links'
import IBudget from '../types/Budget'
import { IEditableRecurringRecordFields } from '../types/RecurringRecord'
import { ApiItemRepo } from './generators/ApiItem'

const budgetRepo = new ApiItemRepo<IEditableRecurringRecordFields, IBudget>(
  apiSubRoutes.budgets
)

export default budgetRepo
