import TInterval from './Interval'
import IItemWithName from './items'
import IUser from './User'

interface IRecurringRecord extends IItemWithName {
  interval: TInterval
  name: string
  amount: number
  startDate: string
  user: IUser['_id']
}

export interface IEditableRecurringRecordFields
  extends Pick<IRecurringRecord, 'name' | 'amount'> {
  startDate: Date
  interval: Omit<TInterval, '_id'>
}

export default IRecurringRecord
