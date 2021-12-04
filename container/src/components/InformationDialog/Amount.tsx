import { Typography } from '@material-ui/core'
import React from 'react'

import { formatAmountWithDecimals } from '../../utils/formatters/amount'

interface Props {
  amount: number
}

export default function Amount({ amount }: Props) {
  const formattedAmount: string = formatAmountWithDecimals(amount)
  return (
    <Typography variant="h4" color="primary">
      ${formattedAmount}
    </Typography>
  )
}
