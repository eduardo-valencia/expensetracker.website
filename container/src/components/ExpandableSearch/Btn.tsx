import React from 'react'
import { useDispatch } from 'react-redux'
import {
  createStyles,
  WithStyles,
  withStyles,
  IconButton,
} from '@material-ui/core'
import { Search } from '@material-ui/icons'

import { setIsExpanded } from '../../actions/search'

const styles = () => {
  return createStyles({
    root: {
      padding: 0,
      marginLeft: '1rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

function Btn({ classes }: Props) {
  const dispatch = useDispatch()
  const expand = () => dispatch(setIsExpanded(true))
  return (
    <IconButton
      onClick={expand}
      className={classes.root}
      aria-label="Toggle search bar"
    >
      <Search />
    </IconButton>
  )
}

export default withStyles(styles)(Btn)
