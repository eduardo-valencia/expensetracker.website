import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import BaseAuthor from '../../../Author'
import Icon from './Icon'

const styles = () => {
  return createStyles({
    name: {
      marginBottom: '0.1875rem',
    },
    title: {
      color: '#FBFBFB',
      fontSize: '1rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Author = ({ classes }: Props) => {
  return (
    <BaseAuthor
      Icon={Icon}
      name="Ann Frank"
      title="Marketing Expert"
      icon="./avatar.png"
      classes={classes}
    />
  )
}

export default withStyles(styles)(Author)
