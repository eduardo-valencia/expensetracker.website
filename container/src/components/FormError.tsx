import React from 'react'
import {
  Typography,
  withStyles,
  WithStyles,
  createStyles,
} from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '2rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const FormError = ({ classes, children }: Props) => {
  return (
    <Typography classes={classes} color="error">
      {children}
    </Typography>
  )
}

export default withStyles(styles)(FormError)
