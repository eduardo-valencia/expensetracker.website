import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const FormError = (props: Props) => {
  return <Typography color="error" {...props}></Typography>
}

export default withStyles(styles)(FormError)
