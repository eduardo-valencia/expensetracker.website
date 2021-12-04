import React from 'react'

import { signIn } from '../../../api/signIn'
import AuthForm from '../../../components/AuthForm/Body/Form'
import SubmitButton from './SubmitButton'

export default function Form() {
  return <AuthForm submit={signIn} submitButton={<SubmitButton />} />
}
