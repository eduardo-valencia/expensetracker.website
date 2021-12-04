import React, { useContext } from 'react'
import { makeStyles, Theme } from '@material-ui/core'

import AppSidebarDesktop from './SidebarDesktop'
import Layout, { LayoutProps } from '../Layout'
import AppNav, { AppNavProps } from './Nav'
import CollapsedSidebarDesktop from '../CollapsedSidebarDesktop'
import {
  collapsedSidebarWidth,
  sidebarWidths,
} from '../../constants/dimensions'
import { ContextValue, NavContext } from '../../contexts/NavContext'

const getMarginLeft =
  (extraMargin: string, sidebarWidth: string) =>
  ({ isDrawerOpen }: ContextValue) => {
    const baseMargin: string | number = isDrawerOpen
      ? sidebarWidth
      : collapsedSidebarWidth
    return `calc(${baseMargin} + ${extraMargin})`
  }

const useStyles = makeStyles(({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  const xl = up('xl')
  return {
    root: {
      [md]: {
        marginLeft: getMarginLeft('0rem', sidebarWidths.md),
      },
      [xl]: {
        marginLeft: 0,
      },
    },
  }
})

export interface AppLayoutProps
  extends Omit<
    LayoutProps,
    'sidebar' | 'nav' | 'classes' | 'user' | 'fetchAndSetUser'
  > {
  children: React.ReactNode
  navProps?: Partial<AppNavProps>
}

export default function AppLayout({
  children,
  navProps,
  ...other
}: AppLayoutProps) {
  const drawerState = useContext(NavContext)
  const classes = useStyles(drawerState)
  return (
    <Layout
      nav={<AppNav {...navProps} />}
      footer={null}
      classes={classes}
      {...other}
    >
      <AppSidebarDesktop />
      <CollapsedSidebarDesktop />
      {children}
    </Layout>
  )
}
