import React from 'react'

import TextInput from './TextInput'
import { InputProps } from './types'

function NameInput(props: InputProps) {
  return <TextInput {...props} placeholder="Name" label="Name" />
}

export default NameInput
