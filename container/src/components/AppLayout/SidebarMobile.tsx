import React from 'react'
import { Hidden } from '@material-ui/core'

import Sidebar from '../Sidebar'

const AppSidebarMobile = () => {
  return (
    <Hidden mdUp implementation="js">
      <Sidebar />
    </Hidden>
  )
}

export default AppSidebarMobile
