import React from 'react'

import ITransaction from '../../types/Transaction'
import { formatDate } from '../../utils/formatters/date'
import ItemWithAmount from '../ItemWithAmount'

export interface TransactionProps extends ITransaction {
  isInFuture?: boolean
}

const Transaction = ({
  name,
  type,
  amount,
  date: dateString,
}: TransactionProps) => {
  const date: Date = new Date(dateString)
  const formattedDate: string = formatDate(date)
  return (
    <ItemWithAmount
      name={name}
      amount={amount}
      bottomText={formattedDate}
      type={type}
    />
  )
}

export default Transaction
