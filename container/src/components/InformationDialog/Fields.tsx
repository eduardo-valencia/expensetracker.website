import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '2.1875rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const Fields = ({ classes, children }: Props) => {
  return <div className={classes.root}>{children}</div>
}

export default withStyles(styles)(Fields)
