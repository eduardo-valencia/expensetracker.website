import React from 'react'
import { FieldRenderProps } from 'react-final-form'

import TextInput, { BaseProps as TextInputProps } from '../../../../TextInput'

export const getInputRenderer =
  <Value extends unknown>(props: TextInputProps) =>
  (fieldRenderProps: FieldRenderProps<Value>) =>
    <TextInput {...props} {...fieldRenderProps} />
