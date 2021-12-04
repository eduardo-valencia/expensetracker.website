import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
  Container,
} from '@material-ui/core'

import { flexBreakpoint } from '../styles'
import GoogleButton from './GoogleButton'
import Divider from './Divider'

const styles = ({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  const flexBreakpointUp = up(flexBreakpoint)
  return createStyles({
    container: {
      paddingTop: '9.5625rem',
      marginBottom: '5.625rem',
      [md]: {
        paddingTop: '10rem',
        marginBottom: '6.1875rem',
      },
      [flexBreakpointUp]: {
        paddingTop: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: 0,
        paddingRight: '6.5625rem',
        maxWidth: '100%',
      },
    },
    content: {
      [flexBreakpointUp]: {
        width: '29.0625rem',
      },
    },
    title: {
      marginBottom: '1.875rem',
      [md]: {
        marginBottom: '2.625rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  title: string
  form: React.ReactNode
  bottomText: React.ReactNode
}

const Body = ({ classes, title, form, bottomText }: Props) => {
  return (
    <Container className={classes.container}>
      <div className={classes.content}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        <GoogleButton />
        <Divider />
        {form}
        {bottomText}
      </div>
    </Container>
  )
}

export default withStyles(styles)(Body)
