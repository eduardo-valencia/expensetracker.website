import React from 'react'

import ResponsiveSignInButton from '../../../components/ResponsiveSignInButton'
import BaseBody from '../../../components/Section/Body'
import Title from './Title'

export default function Body() {
  return (
    <BaseBody
      title={<Title />}
      description="Use powerful statistics to see how well you are using your money. Compare your incomes and expenses and see your spending trends over time."
      maxWidthLg="31.8125rem"
    >
      <ResponsiveSignInButton>Sign Up Now</ResponsiveSignInButton>
    </BaseBody>
  )
}
