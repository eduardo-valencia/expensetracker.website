export const getTotal = transactions =>
  transactions.reduce(
    (total, { type, amount }) =>
      type === 'expense' ? total - amount : total + amount,
    0
  )
