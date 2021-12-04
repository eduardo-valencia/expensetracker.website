import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  IconButton,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'

import { OpenState } from '../hooks/isOpen'

const styles = () => {
  return createStyles({
    button: {
      padding: 0,
    },
    icon: {
      width: '1.5rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  close: OpenState['close']
}

const DialogToolbar = ({ classes, close }: Props) => {
  return (
    <IconButton className={classes.button} onClick={close} aria-label="Close">
      <Close className={classes.icon} />
    </IconButton>
  )
}

export default withStyles(styles)(DialogToolbar)
