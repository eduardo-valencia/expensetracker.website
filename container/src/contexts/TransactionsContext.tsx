import React from 'react'

export interface TransactionsContextValue {
  fetchTransactions: () => void
}

export const TransactionsContext =
  React.createContext<TransactionsContextValue | null>(null)
