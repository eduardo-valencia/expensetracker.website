import Credentials from '../api/types/Credentials'
import { errorMessages } from './form'

interface FormFields {
  [key: string]: keyof Credentials
}

export const formFields: FormFields = {
  username: 'username',
  password: 'password',
}

export const errors = {
  emptyField: errorMessages.emptyField,
}

export const placeholders = {
  email: 'Email',
  password: 'Password',
}

export const buttonText = {
  signUp: 'Sign Up',
  signIn: 'Log In',
}
