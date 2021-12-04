import React from 'react'
import {
  IconButton,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'
import { CloseDrawer } from '../../../Nav/types'

const styles = ({
  palette: {
    text: { secondary },
  },
}: Theme) => {
  return createStyles({
    root: {
      color: secondary,
      padding: 0,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  closeDrawer: CloseDrawer
}

const CloseButton = ({ classes, closeDrawer }: Props) => {
  return (
    <IconButton onClick={closeDrawer} classes={classes}>
      <CloseIcon />
    </IconButton>
  )
}

export default withStyles(styles)(CloseButton)
