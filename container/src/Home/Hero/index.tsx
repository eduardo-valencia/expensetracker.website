import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Container,
  Theme,
} from '@material-ui/core'

import Body from './Body'
import Image from './ImageContainer'
import { flexBreakpoint } from './styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginTop: '2.4375rem',
      marginBottom: '4.9375rem',
      [up('md')]: {
        marginTop: '5.375rem',
        marginBottom: '4.5625rem',
      },
      [up(flexBreakpoint)]: {
        marginBottom: '15.75rem',
      },
    },
    container: {
      [up(flexBreakpoint)]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Hero = ({ classes }: Props) => {
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Body />
        <Image />
      </Container>
    </section>
  )
}

export default withStyles(styles)(Hero)
