import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

import { OpenState } from '../hooks/isOpen'
import CloseButton from './CloseButton'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      marginBottom: '2.0625rem',
      justifyContent: 'space-between',
    },
  })
}

export interface DialogToolbarProps extends WithStyles<typeof styles> {
  close: OpenState['close']
  title: string
}

const DialogToolbar = ({ classes, title, close }: DialogToolbarProps) => {
  return (
    <div className={classes.root}>
      <Typography variant="h5">{title}</Typography>
      <CloseButton close={close} />
    </div>
  )
}

export default withStyles(styles)(DialogToolbar)
