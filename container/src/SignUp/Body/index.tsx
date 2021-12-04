import React from 'react'

import AuthBody from '../../components/AuthForm/Body'
import BottomText from '../../components/AuthForm/Body/BottomText'
import Form from './Form'

export default function Body() {
  return (
    <AuthBody
      form={<Form />}
      title="Create Account"
      bottomText={
        <BottomText
          startText="Already have an account?"
          linkText="Sign In"
          href="/sign-in"
        />
      }
    ></AuthBody>
  )
}
