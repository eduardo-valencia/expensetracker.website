import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Sidebar from '../Layout/LandingNav/Sidebar'
import LandingNav from '../Layout/LandingNav'

const styles = () => {
  const backgroundColor = 'transparent'
  return createStyles({
    root: {
      backgroundColor,
    },
    toolbar: {
      backgroundColor,
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Nav = ({ classes }: Props) => {
  return (
    <LandingNav
      position="absolute"
      showLinks={false}
      classes={classes}
      drawer={<Sidebar />}
    />
  )
}

export default withStyles(styles)(Nav)
