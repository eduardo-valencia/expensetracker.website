import React from 'react'

import Drawer from '../../Nav/Drawer'
import Links from '../../Nav/Links'
import Toolbar from './Toolbar'

export default function Sidebar() {
  return (
    <Drawer>
      <Toolbar />
      <Links />
    </Drawer>
  )
}
