import React from 'react'

import AuthBody from '../../components/AuthForm/Body'
import BottomText from '../../components/AuthForm/Body/BottomText'
import { links } from '../../constants/links'
import Form from './Form'

export default function Body() {
  return (
    <AuthBody
      form={<Form />}
      title="Welcome Back"
      bottomText={
        <BottomText
          startText="Don't have an account?"
          linkText="Create an account"
          href={links.signUp}
        />
      }
    ></AuthBody>
  )
}
