import React, { useContext } from 'react'
import {
  createStyles,
  withStyles,
  WithStyles,
  Button,
  Theme,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

import { getSize } from '../../utils/styles'
import { CreationDialogContext } from '../../contexts/CreationDialogContext'

const styles = ({ shadows }: Theme) => {
  const size = '2.6875rem'
  return createStyles({
    root: {
      ...getSize(size),
      borderRadius: '50%',
      alignItems: 'center',
      position: 'fixed',
      bottom: '0.8125rem',
      right: '1.5rem',
      padding: 0,
      minWidth: size,
      boxShadow: shadows[1],
    },
    icon: {
      width: '0.875rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

function AddBtn({ classes }: Props) {
  const { open } = useContext(CreationDialogContext)
  return (
    <Button
      className={classes.root}
      color="primary"
      variant="contained"
      onClick={open}
      aria-label="Add new"
    >
      <Add className={classes.icon} />
    </Button>
  )
}

export default withStyles(styles)(AddBtn)
