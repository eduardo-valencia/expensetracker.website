import React from 'react'

import AmountField from './AmountField'
import DateField from './DateField'
import TransactionTypeField from './TransactionTypeField'

function BasicInfo() {
  return (
    <div>
      <TransactionTypeField />
      <AmountField />
      <DateField />
    </div>
  )
}

export default BasicInfo
