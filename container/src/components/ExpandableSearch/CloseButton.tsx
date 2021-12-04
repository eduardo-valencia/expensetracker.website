import React from 'react'
import { useDispatch } from 'react-redux'
import {
  createStyles,
  withStyles,
  WithStyles,
  IconButton,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'

import { setIsExpanded } from '../../actions/search'

const styles = () => {
  return createStyles({
    root: {
      padding: 0,
      marginRight: '0.75rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

function CloseButton({ classes }: Props) {
  const dispatch = useDispatch()

  const collapse = () => dispatch(setIsExpanded(false))
  return (
    <IconButton
      onClick={collapse}
      className={classes.root}
      aria-label="Close search"
    >
      <Close />
    </IconButton>
  )
}

export default withStyles(styles)(CloseButton)
