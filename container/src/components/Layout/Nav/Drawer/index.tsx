import React, { useContext } from 'react'
import {
  Drawer as BaseDrawer,
  withStyles,
  createStyles,
  DrawerProps,
} from '@material-ui/core'

import Links from '../Links'
import { NavContext } from '../../../../contexts/NavContext'

const styles = () => {
  return createStyles({
    root: {},
    paper: {
      padding: '1rem 2rem',
    },
  })
}

export interface Props extends DrawerProps {
  children: React.ReactNode
}

const Drawer = ({ classes, children = <Links />, ...other }: Props) => {
  const { closeDrawer, isDrawerOpen } = useContext(NavContext)
  return (
    <BaseDrawer
      classes={classes}
      onClose={closeDrawer}
      open={isDrawerOpen}
      variant="temporary"
      anchor="right"
      {...other}
    >
      {children}
    </BaseDrawer>
  )
}

export default withStyles(styles)(Drawer)
