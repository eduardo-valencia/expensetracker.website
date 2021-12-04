import React from 'react'
import {
  Typography,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import Line from './Line'

const styles = ({ typography: { buttonSm } }: Theme) => {
  return createStyles<'root' | 'text', {}>({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1.375rem',
    },
    text: {
      ...buttonSm,
      letterSpacing: '-0.0187rem',
      margin: '0 0.625rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Divider = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <Line />
      <Typography color="textSecondary" className={classes.text}>
        Or connect with your email
      </Typography>
      <Line />
    </div>
  )
}

export default withStyles(styles)(Divider)
