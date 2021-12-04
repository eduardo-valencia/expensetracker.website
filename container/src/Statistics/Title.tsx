import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { display6 } from '../styles/typography'

const styles = ({ typography: { buttonSm }, breakpoints: { up } }: Theme) => {
  const md = up('md')
  return createStyles({
    title: {
      ...buttonSm,
      [md]: {
        ...display6,
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const Title = ({ classes, children }: Props) => {
  return (
    <Typography component="h6" className={classes.title}>
      {children}
    </Typography>
  )
}

export default withStyles(styles)(Title)
