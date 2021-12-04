import React from 'react'

import TextInput from './TextInput'
import { InputProps } from './types'

function AmountInput(props: InputProps) {
  return (
    <TextInput {...props} placeholder="$00.00" type="number" label="Amount" />
  )
}

export default AmountInput
