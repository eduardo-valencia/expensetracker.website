import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import Nav, { NavProps } from '../Layout/Nav'
import ToggleNav from '../ToggleNav'
import AppSidebarMobile from './SidebarMobile'
import { showAppSidebarBreakpoint } from '../Sidebar/styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  const showAppSidebarUp = up(showAppSidebarBreakpoint)
  return createStyles({
    root: {
      [showAppSidebarUp]: {
        display: 'none',
      },
    },
  })
}

export interface AppNavProps
  extends WithStyles<typeof styles>,
    Pick<NavProps, 'right'> {}

const AppNav = (props: AppNavProps) => {
  return <Nav {...props} left={<ToggleNav />} drawer={<AppSidebarMobile />} />
}

export default withStyles(styles)(AppNav)
