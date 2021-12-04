import ITransaction from '../../types/Transaction'

export const formatAmountWithDecimals = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'decimal',
  })
}

export default function formatAmount(
  amount: number,
  type: ITransaction['type'] | null = null
) {
  const isExpense = type === 'expense' || amount < 0
  const absoluteAmount: number = Math.abs(amount)
  const amountWithDecimals: string = formatAmountWithDecimals(absoluteAmount)
  return isExpense ? `-$${amountWithDecimals}` : `$${amountWithDecimals}`
}
