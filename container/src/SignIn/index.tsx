import React from 'react'

import AuthForm from '../components/AuthForm'
import Body from './Body'

export default function SignIn() {
  return <AuthForm body={<Body />}></AuthForm>
}
