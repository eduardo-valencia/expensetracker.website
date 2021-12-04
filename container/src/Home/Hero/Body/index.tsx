import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
  Theme,
} from '@material-ui/core'

import ResponsiveSignInButton from '../../../components/ResponsiveSignInButton'

const styles = ({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  const xl = up('xl')

  return createStyles({
    root: {
      marginBottom: '2.75rem',
      [xl]: {
        marginRight: '14.875rem',
      },
    },
    title: {
      marginBottom: '0.9375rem',
      [md]: {
        marginBottom: '1.9375rem',
      },
    },
    description: {
      marginBottom: '1.4375rem',
      [md]: {
        marginBottom: '3.375rem',
      },
      [xl]: {
        marginBottom: '4.6875rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Body = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Track your expenses
      </Typography>
      <Typography
        variant="body1"
        className={classes.description}
        color="textSecondary"
      >
        Use a smart expense tracker to help you manage your money.
      </Typography>
      <ResponsiveSignInButton />
    </div>
  )
}

export default withStyles(styles)(Body)
