import React from 'react'
import { Button, ButtonProps } from '@material-ui/core'

import { useNavigatorToLink } from '../utils/navigate'
import { links } from '../constants/links'
import getUserData from '../api/user'

const SignUpButton = ({ children = null, ...other }: ButtonProps) => {
  const navigateToSignUp = useNavigatorToLink(links.signUp)
  const navigateToTransactions = useNavigatorToLink(links.transactions)

  const redirectToTransactionsOrSignUp = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.persist()
    const { data: userResponse } = await getUserData()
    if ('user' in userResponse) {
      return navigateToTransactions(event)
    }
    return navigateToSignUp(event)
  }

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={redirectToTransactionsOrSignUp}
      {...other}
    >
      {children || 'Sign Up'}
    </Button>
  )
}

export default SignUpButton
