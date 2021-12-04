import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  CircularProgress,
} from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const LoadingWrapper = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  )
}

export default withStyles(styles)(LoadingWrapper)
