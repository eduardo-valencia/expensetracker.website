import { IEditableRecurringRecordFields } from '../../types/RecurringRecord'

export interface IRecurringRecordFormValues
  extends Omit<IEditableRecurringRecordFields, 'interval'> {
  period: string
  frequency: number
}
