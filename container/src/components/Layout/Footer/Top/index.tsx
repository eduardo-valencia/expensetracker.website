import React from 'react'
import {
  Container,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

import Sections from './Sections'
import { expandLinksBreakpoint } from './styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginBottom: '3.375rem',
      [up(expandLinksBreakpoint)]: {
        display: 'flex',
        marginBottom: '5.6875rem',
      },
      [up('xl')]: {
        marginBottom: '6.125rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Top = ({ classes }: Props) => {
  return (
    <Container className={classes.root}>
      <Sections />
    </Container>
  )
}

export default withStyles(styles)(Top)
