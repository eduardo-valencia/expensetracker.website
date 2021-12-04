import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import getItem, { ItemProps } from './Item'
import { showAppSidebarBreakpoint } from '../styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  const showAppSidebarUp = up(showAppSidebarBreakpoint)
  return createStyles({
    mobile: {
      [showAppSidebarUp]: {
        display: 'none',
      },
    },
    desktop: {
      display: 'none',
      [showAppSidebarUp]: {
        display: 'flex',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles>, Omit<ItemProps, 'classes'> {}

const MobileItem = getItem(true)
const DesktopItem = getItem(false)

const ResponsiveItem = ({ classes, ...other }: Props) => {
  return (
    <>
      <MobileItem classes={{ root: classes.mobile }} {...other} />
      <DesktopItem classes={{ root: classes.desktop }} {...other} />
    </>
  )
}

export default withStyles(styles)(ResponsiveItem)
