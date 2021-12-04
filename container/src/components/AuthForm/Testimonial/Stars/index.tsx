import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import BaseStars from '../../../Stars'
import Star from './Star'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginBottom: '2.3125rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Stars = ({ classes, ...other }: Props) => {
  return <BaseStars classes={classes} Item={Star} stars={5} />
}

export default withStyles(styles)(Stars)
