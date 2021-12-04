import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import { expandOptionsBreakpoint } from '../../constants/breakpoints'
import { FilterList as Filter } from '@material-ui/icons'
import { FiltersContext } from '../../contexts/Filters'
import MutedOutlinedButton from '../../components/MutedOutlinedButton'

const styles = ({ breakpoints: { up } }: Theme) => {
  const expandBreakpointUp = up(expandOptionsBreakpoint)
  return createStyles({
    root: {
      marginLeft: '1.5625rem',
      borderRadius: '0.3125rem',
      [expandBreakpointUp]: {
        display: 'flex',
      },
    },
    endIcon: {
      marginLeft: '0.5rem',
      width: '1.5rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const FilterButtonDesktop = ({ classes }: Props) => {
  const { open } = useContext(FiltersContext)
  return (
    <MutedOutlinedButton classes={classes} endIcon={<Filter />} onClick={open}>
      Filter
    </MutedOutlinedButton>
  )
}

export default withStyles(styles)(FilterButtonDesktop)
