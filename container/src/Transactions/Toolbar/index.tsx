import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import Search from './Search'
import FilterButtonDesktop from './FilterButtonDesktop'
import { expandOptionsBreakpoint } from '../../constants/breakpoints'

const styles = ({ breakpoints: { up } }: Theme) => {
  const xl = up('xl')
  return createStyles({
    root: {
      display: 'none',
      [up(expandOptionsBreakpoint)]: {
        marginBottom: '1.9375rem',
        display: 'flex',
        justifyContent: 'space-between',
      },
      [xl]: {
        marginBottom: '2.5rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Toolbar = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <Search />
      <FilterButtonDesktop />
    </div>
  )
}

export default withStyles(styles)(Toolbar)
