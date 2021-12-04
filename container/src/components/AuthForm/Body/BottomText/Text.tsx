import React from 'react'
import {
  Typography,
  withStyles,
  createStyles,
  TypographyProps,
  WithStyles,
} from '@material-ui/core'

export const textStyles = {
  letterSpacing: '-0.0331rem',
  fontSize: '1rem',
  lineHeight: '1.3125rem',
}

const styles = () => {
  return createStyles({
    root: {
      ...textStyles,
      display: 'inline',
    },
  })
}

interface Props
  extends Omit<TypographyProps, 'classes'>,
    WithStyles<typeof styles> {}

const Text = (props: Props) => <Typography component="span" {...props} />

export default withStyles(styles)(Text)
