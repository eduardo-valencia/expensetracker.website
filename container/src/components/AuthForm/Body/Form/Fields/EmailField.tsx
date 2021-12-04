import React from 'react'
import { Field } from 'react-final-form'

import Credentials from '../../../../../api/types/Credentials'
import { formFields, placeholders } from '../../../../../constants/authForm'
import { getInputRenderer } from './renderInput'

const EmailField = () => {
  const renderInput = getInputRenderer<Credentials['username']>({
    placeholder: placeholders.email,
    type: 'email',
    id: formFields.username,
  })

  return <Field name={formFields.username} render={renderInput} />
}

export default EmailField
