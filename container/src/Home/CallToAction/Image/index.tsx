import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Hidden,
  Theme,
} from '@material-ui/core'

import { paddingYMd } from '../styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      width: '31.5625rem',
      [up('xl')]: {
        position: 'absolute',
        bottom: `calc(-${paddingYMd} - 0.1875rem)`,
        right: 0,
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Image = ({ classes }: Props) => {
  return (
    <Hidden lgDown>
      <img
        src="/call-to-action.png"
        alt="Transactions and statistics"
        className={classes.root}
      />
    </Hidden>
  )
}

export default withStyles(styles)(Image)
