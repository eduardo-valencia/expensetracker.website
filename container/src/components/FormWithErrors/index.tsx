import { Config } from 'final-form'
import React from 'react'
import { Form } from 'react-final-form'

import FormError from '../FormError'
import ErrorsList from './ErrorsList'

export interface FormWithErrorsProps<Values> extends Config<Values> {
  children: React.ReactNode
}

const getFormWithErrors = <Values extends unknown>() => {
  function FormWithErrors({ children, ...other }: FormWithErrorsProps<Values>) {
    return (
      <Form
        {...other}
        render={({
          handleSubmit,
          hasSubmitErrors,
          submitError,
          errors,
          hasValidationErrors,
          submitFailed,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              {hasSubmitErrors && <FormError>{submitError}</FormError>}
              {hasValidationErrors && submitFailed && (
                <ErrorsList errors={errors} />
              )}
              {children}
            </form>
          )
        }}
      />
    )
  }

  return FormWithErrors
}

export default getFormWithErrors
