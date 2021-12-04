import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import CloseButton from './CloseButton'
import { NavContext } from '../../../../../contexts/NavContext'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Toolbar = ({ classes }: Props) => {
  const { closeDrawer } = useContext(NavContext)
  return (
    <div className={classes.root}>
      <CloseButton closeDrawer={closeDrawer} />
    </div>
  )
}

export default withStyles(styles)(Toolbar)
