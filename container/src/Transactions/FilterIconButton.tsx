import React, { useContext } from 'react'
import {
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  IconButton,
} from '@material-ui/core'
import { FilterList as Filter } from '@material-ui/icons'

import { expandOptionsBreakpoint } from '../constants/breakpoints'
import { FiltersContext } from '../contexts/Filters'

const styles = ({
  palette: {
    text: { secondary },
  },
  breakpoints: { up },
}: Theme) => {
  const expandOptionsUp = up(expandOptionsBreakpoint)
  return createStyles({
    root: {
      [expandOptionsUp]: {
        display: 'none',
      },
    },
    icon: {
      color: secondary,
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const FilterIconButton = ({ classes }: Props) => {
  const { open } = useContext(FiltersContext)
  return (
    <IconButton
      className={classes.root}
      onClick={open}
      aria-label="Open filters"
    >
      <Filter className={classes.icon} />
    </IconButton>
  )
}

export default withStyles(styles)(FilterIconButton)
