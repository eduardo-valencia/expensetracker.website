import React from 'react'
import {
  createStyles,
  withStyles,
  Typography,
  Theme,
  WithStyles,
  TypographyProps,
} from '@material-ui/core'
import { expandLinksBreakpoint } from './Top/styles'

const styles = ({ breakpoints: { up }, typography: { body1 } }: Theme) => {
  return createStyles({
    root: {
      [up('lg')]: {
        fontSize: body1.fontSize,
      },
      '& + &': {
        marginTop: '0.5rem',
        [up(expandLinksBreakpoint)]: {
          marginTop: 0,
        },
      },
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<TypographyProps, 'classes' | 'variant'> {}

const Text = ({ classes, ...other }: Props) => {
  return <Typography classes={classes} variant="body1" {...other} />
}

export default withStyles(styles)(Text)
