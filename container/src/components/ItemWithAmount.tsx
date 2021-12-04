import React from 'react'

import ITransaction from '../types/Transaction'
import SimpleListItem from './SimpleListItem'
import formatAmount from '../utils/formatters/amount'
import BottomText from './SimpleListItem/BottomText'
import Body from './SimpleListItem/Body'
import { formatDate } from '../utils/formatters/date'

export interface TransactionProps {
  bottomText: React.ReactNode
  name: string
  amount: number
  type?: ITransaction['type']
}

const ItemWithAmount = ({
  name,
  amount,
  bottomText,
  type,
}: TransactionProps) => {
  const formattedAmount: string = formatAmount(amount, type)
  return (
    <SimpleListItem
      title={name}
      formattedAmount={formattedAmount}
      body={
        <Body title={name}>
          <BottomText>{bottomText}</BottomText>
        </Body>
      }
    />
  )
}

export default ItemWithAmount
