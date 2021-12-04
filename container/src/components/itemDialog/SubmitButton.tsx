import { Button } from '@material-ui/core'
import React from 'react'

interface Props {
  children: React.ReactNode
}

function SubmitButton({ children }: Props) {
  return (
    <Button variant="contained" color="primary" type="submit">
      {children}
    </Button>
  )
}

export default SubmitButton
