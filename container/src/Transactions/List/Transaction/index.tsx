import React, { useEffect } from 'react'

import { Observe } from '../types'
import ITransaction from '../../../types/Transaction'
import TransactionWithDialog from '../../../components/TransactionWithDialog'

export interface TransactionWithModalProps extends ITransaction {
  isLastItem: boolean
  observe: Observe
}

function TransactionWithModal({
  isLastItem,
  observe,
  ...other
}: TransactionWithModalProps) {
  useEffect(() => {
    if (isLastItem) observe()
  }, [isLastItem, observe])

  return <TransactionWithDialog {...other} />
}

export default TransactionWithModal
