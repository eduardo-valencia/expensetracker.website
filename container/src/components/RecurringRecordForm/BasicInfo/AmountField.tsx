import React from 'react'
import { Field } from 'react-final-form'

import { fieldNames } from '../../../constants/recurringRecordForm'
import AmountInput from '../../FormDialog/AmountInput'

function AmountField() {
  return (
    <Field
      name={fieldNames.amount}
      render={AmountInput}
      id={fieldNames.amount}
    />
  )
}

export default AmountField
