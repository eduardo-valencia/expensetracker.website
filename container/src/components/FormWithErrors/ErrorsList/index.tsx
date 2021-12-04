import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { ValidationErrors } from 'final-form'

import FormError from './FormError'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {
  errors: ValidationErrors
}

const ErrorsList = ({ classes, errors }: Props) => {
  type ErrorEntry = [string, string]

  const renderError = (
    [property, message]: ErrorEntry,
    index: number
  ): JSX.Element => {
    return (
      <FormError key={index}>
        {property}: {message}
      </FormError>
    )
  }

  const renderErrors = (): JSX.Element[] => {
    const entries: ErrorEntry[] = Object.entries(errors!)
    return entries.map(renderError)
  }

  const renderedErrors: JSX.Element[] = renderErrors()

  return <ul>{renderedErrors}</ul>
}

export default withStyles(styles)(ErrorsList)
