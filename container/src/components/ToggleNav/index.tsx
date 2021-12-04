import React, { useContext } from 'react'
import {
  createStyles,
  IconButton,
  WithStyles,
  withStyles,
  Theme,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { NavContext } from '../../contexts/NavContext'

const styles = ({
  palette: {
    text: { secondary },
  },
}: Theme) => {
  return createStyles({
    root: {
      padding: 0,
      color: secondary,
    },
    icon: {
      width: '1.125rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

function ToggleNav({ classes }: Props) {
  const { openDrawer, closeDrawer, isDrawerOpen } = useContext(NavContext)

  const toggle = (): void => {
    if (isDrawerOpen) {
      return closeDrawer()
    }
    return openDrawer()
  }

  return (
    <IconButton
      onClick={toggle}
      className={classes.root}
      data-toggle="collapse"
      data-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <MenuIcon className={classes.icon} />
    </IconButton>
  )
}

export default withStyles(styles)(ToggleNav)
