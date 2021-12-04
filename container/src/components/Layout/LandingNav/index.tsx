import React from 'react'
import { Hidden } from '@material-ui/core'

import SignUpButton from '../Nav/SignInButton'
import Nav, { NavProps } from '../Nav'
import ExpandedLinks from '../Nav/ExpandedLinks'
import Logo from './Logo'
import ToggleNav from './ToggleNav'
import Sidebar from './Sidebar'

interface LandingNavProps extends Partial<Omit<NavProps, 'classes'>> {
  classes?: Partial<NavProps['classes']>
}

export default function LandingNav(props: LandingNavProps) {
  return (
    <Nav
      right={
        <>
          <ExpandedLinks />
          <SignUpButton />
          <Hidden lgUp>
            <ToggleNav />
          </Hidden>
        </>
      }
      left={<Logo />}
      drawer={<Sidebar />}
      {...props}
    />
  )
}
