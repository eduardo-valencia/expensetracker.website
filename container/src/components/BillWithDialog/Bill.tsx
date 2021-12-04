import React from 'react'

import IBill from '../../types/Bill'
import { getFriendlyNextDueDate } from '../../utils/dates/nextDue'
import ItemWithAmount from '../ItemWithAmount'

export interface BillProps extends IBill {}

function Bill({
  name,
  amount,
  startDate: startDateString,
  interval,
}: BillProps) {
  const startDate: Date = new Date(startDateString)
  const nextDue: Date = getFriendlyNextDueDate(interval, null, startDate)
  return (
    <ItemWithAmount
      name={name}
      amount={amount}
      bottomText={`Next due ${nextDue}`}
    />
  )
}

export default Bill
