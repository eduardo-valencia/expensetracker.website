import React from 'react'
import { Field } from 'react-final-form'

import Credentials from '../../../../../api/types/Credentials'
import { formFields, placeholders } from '../../../../../constants/authForm'
import { getInputRenderer } from './renderInput'

const PasswordField = () => {
  const renderInput = getInputRenderer<Credentials['password']>({
    placeholder: placeholders.password,
    type: 'password',
    id: formFields.password,
  })

  return <Field name={formFields.password} render={renderInput} />
}

export default PasswordField
