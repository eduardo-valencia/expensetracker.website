import React from 'react'
import { Field } from 'react-final-form'

import { fieldNames } from '../../../constants/recurringRecordForm'
import TextInput from '../../FormDialog/TextInput'
import { InputProps } from '../../FormDialog/types'

const FrequencyInput = (props: InputProps) => {
  return <TextInput {...props} placeholder="1 month" label="Every" />
}

function EveryField() {
  return (
    <Field
      name={fieldNames.frequency}
      id={fieldNames.frequency}
      render={FrequencyInput}
    />
  )
}

export default EveryField
