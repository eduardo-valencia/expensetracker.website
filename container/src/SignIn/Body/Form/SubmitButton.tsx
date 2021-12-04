import React from 'react'

import BaseSubmitButton from '../../../components/AuthForm/Body/Form/SubmitButton'
import { buttonText } from '../../../constants/authForm'

export default function SubmitButton() {
  return <BaseSubmitButton>{buttonText.signIn}</BaseSubmitButton>
}
