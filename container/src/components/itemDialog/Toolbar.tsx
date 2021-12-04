import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import { OpenState } from '../../hooks/isOpen'
import CloseButton from '../CloseButton'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      marginBottom: '2.5rem',
    },
  })
}

interface Props extends WithStyles<typeof styles>, Pick<OpenState, 'close'> {}

const Toolbar = ({ classes, close }: Props) => {
  return (
    <div className={classes.root}>
      <CloseButton close={close} />
    </div>
  )
}

export default withStyles(styles)(Toolbar)
