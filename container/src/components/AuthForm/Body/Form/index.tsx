import React from 'react'
import { Config } from 'final-form'
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'

import Fields from './Fields'
import { formFields } from '../../../../constants/authForm'
import Credentials from '../../../../api/types/Credentials'
import { AuthRequestCreator } from '../../../../api/signIn'
import { links } from '../../../../constants/links'
import { useDispatch } from 'react-redux'
import { fetchAndSetUser } from '../../../../actions/user'
import { useRouter } from 'next/router'
import FormValidator from '../../../../utils/form/FormValidator'
import { handleError, validateResponse } from '../../../../utils/form/errors'
import User from '../../../../api/types/User'
import getFormWithErrors from '../../../FormWithErrors'

type AuthFormConfig = Config<Credentials>

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '2.125rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  submit: AuthRequestCreator
  submitButton: React.ReactNode
}

const FormWithErrors = getFormWithErrors<Credentials>()

const AuthForm = ({ submit, submitButton, classes }: Props) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const makeRequest = async (values: Credentials): Promise<void> => {
    const response = await submit(values)
    validateResponse<User>(response)
  }

  const onSubmit: AuthFormConfig['onSubmit'] = async (values) => {
    try {
      await makeRequest(values)
      fetchAndSetUser()(dispatch)
      router.push(links.transactions)
    } catch (error) {
      return handleError(error)
    }
  }

  const validator = new FormValidator<Credentials>()
  const validate = validator.getValidator([
    formFields.username,
    formFields.password,
  ])

  return (
    <FormWithErrors onSubmit={onSubmit} validate={validate}>
      <Fields />
      {submitButton}
    </FormWithErrors>
  )
}

export default withStyles(styles)(AuthForm)
