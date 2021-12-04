import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Drawer from './Layout/Nav/Drawer'
import ToggleNav from './ToggleNav'
import addDesktopSidebarHideStyles from '../styles/sidebarDesktop'
import { NavContext } from '../contexts/NavContext'

const styles = () => {
  return createStyles({
    root: {
      padding: '1rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const CollapsedSidebarDesktop = ({ classes }: Props) => {
  const { isDrawerOpen } = useContext(NavContext)
  if (isDrawerOpen) return null
  return (
    <Drawer variant="permanent" anchor="left" classes={{ paper: classes.root }}>
      <ToggleNav />
    </Drawer>
  )
}

const SidebarWithHideStyles = addDesktopSidebarHideStyles(
  CollapsedSidebarDesktop
)

export default withStyles(styles)(SidebarWithHideStyles)
