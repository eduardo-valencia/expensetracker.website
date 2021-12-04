import React from 'react'

import IBudget from '../../../types/Budget'
import SimpleListItem from '../../SimpleListItem'
import formatAmount from '../../../utils/formatters/amount'
import ProgressBar from './ProgressBar'

export interface BudgetProps extends IBudget {}

function Budget({ name, amount, total }: BudgetProps) {
  const getLabel = (): string => {
    const formattedAmount: string = formatAmount(amount)
    const formattedTotal: string = formatAmount(total)
    return `${formattedTotal} / ${formattedAmount}`
  }

  return (
    <SimpleListItem
      title={name}
      formattedAmount={getLabel()}
      bottom={<ProgressBar amount={amount} total={total} />}
    />
  )
}

export default Budget
