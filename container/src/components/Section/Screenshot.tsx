import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import { flexBreakpoint } from './styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      width: '100%',
      maxWidth: '21.0625rem',
      display: 'block',
      margin: '0 auto',
      [up(flexBreakpoint)]: {
        width: '19.9375rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  Image: React.FC<{ className: string }>
}

const Screenshot = ({ classes, Image }: Props) => {
  return <Image className={classes.root} />
}

export default withStyles(styles)(Screenshot)
