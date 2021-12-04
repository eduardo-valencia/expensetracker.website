import React, { useContext } from 'react'
import { WithStyles, createStyles, Theme } from '@material-ui/core'

import Sidebar from '../Sidebar'
import { NavContext } from '../../contexts/NavContext'
import addDesktopSidebarHideStyles from '../../styles/sidebarDesktop'
import { showAppSidebarBreakpoint } from '../Sidebar/styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  const showSidebarUp = up(showAppSidebarBreakpoint)
  return createStyles({
    root: {
      display: 'none',
      [showSidebarUp]: {
        display: 'flex',
        marginRight: '15.1875rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const AppSidebarDesktop = ({ classes }: Props) => {
  const { isDrawerOpen } = useContext(NavContext)
  if (!isDrawerOpen) return null
  return <Sidebar classes={classes} variant="permanent" />
}

export default addDesktopSidebarHideStyles(AppSidebarDesktop)
