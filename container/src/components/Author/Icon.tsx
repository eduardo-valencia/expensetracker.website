import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import { getSize } from '../../utils/styles'
import { Author } from './types'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      boxShadow: '-2px 16px 27px rgba(111, 118, 138, 0.156863)',
      borderRadius: '0.625rem',
      marginRight: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...getSize('4.375rem'),
    },
    icon: {
      ...getSize('2.5rem'),
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  icon: Author['icon']
  name: Author['name']
}

const Icon = ({ classes, icon, name }: Props) => {
  return (
    <div className={classes.root}>
      <img src={icon} alt={name} className={classes.icon} />
    </div>
  )
}

export default withStyles(styles)(Icon)
