import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      '& + &': {
        marginTop: '3.75rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const Section = ({ classes, children }: Props) => {
  return <section className={classes.root}>{children}</section>
}

export default withStyles(styles)(Section)
