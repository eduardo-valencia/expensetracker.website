import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
  TypographyProps,
} from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {},
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<TypographyProps, 'classes'> {}

const Description = (props: Props) => {
  return <Typography {...props} color="textSecondary" variant="body1" />
}

export default withStyles(styles)(Description)
