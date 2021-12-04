import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import EmailField from './EmailField'
import PasswordField from './PasswordField'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginBottom: '2.5625rem',
      [up('md')]: {
        marginBottom: '2.75rem',
      },
      [up('xl')]: {
        marginBottom: '2.25rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Fields = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <EmailField />
      <PasswordField />
    </div>
  )
}

export default withStyles(styles)(Fields)
