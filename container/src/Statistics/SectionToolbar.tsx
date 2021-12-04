import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Title from './Title'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.625rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  title: string
  children?: React.ReactNode
}

const SectionToolbar = ({ classes, title, children = null }: Props) => {
  return (
    <div className={classes.root}>
      <Title>{title}</Title>
      {children}
    </div>
  )
}

export default withStyles(styles)(SectionToolbar)
