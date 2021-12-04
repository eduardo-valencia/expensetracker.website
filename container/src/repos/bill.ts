import { apiSubRoutes } from '../constants/links'
import IBill from '../types/Budget'
import { IEditableRecurringRecordFields } from '../types/RecurringRecord'
import { ApiItemRepo } from './generators/ApiItem'

const budgetRepo = new ApiItemRepo<IEditableRecurringRecordFields, IBill>(
  apiSubRoutes.bills
)

export default budgetRepo
