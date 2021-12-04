import React from 'react'
import {
  Divider,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      width: '0.8125rem',
      height: '0.0625rem',
      backgroundColor: '#E1E4EB',
      [up('md')]: {
        width: '10.5rem',
      },
      [up('xl')]: {
        width: '6rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Line = ({ classes }: Props) => {
  return <Divider className={classes.root} />
}

export default withStyles(styles)(Line)
