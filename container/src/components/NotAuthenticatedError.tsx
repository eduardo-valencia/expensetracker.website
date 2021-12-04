import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Container,
  Button,
} from '@material-ui/core'

import Hero from './Hero'
import { useNavigatorToLink } from '../utils/navigate'
import { links } from '../constants/links'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const NotAuthenticatedError = ({ classes }: Props) => {
  const navigate = useNavigatorToLink(links.signIn)

  return (
    <Container>
      <Hero title="Sign in to access this page" />
      <Button
        variant="contained"
        color="primary"
        href={links.signIn}
        onClick={navigate}
      >
        Sign In
      </Button>
    </Container>
  )
}

export default withStyles(styles)(NotAuthenticatedError)
