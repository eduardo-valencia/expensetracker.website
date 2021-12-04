import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const Actions = ({ classes, children }: Props) => {
  return <div className={classes.root}>{children}</div>
}

export default withStyles(styles)(Actions)
