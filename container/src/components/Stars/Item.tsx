import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import Star from '@material-ui/icons/Star'

const styles = ({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  return createStyles({
    root: {
      listStyle: 'none',
      '& + &': {
        marginLeft: '0.4rem',
      },
    },
    icon: {
      width: '1.25rem',
      color: '#FFA136',
      [md]: {
        width: '1.4375rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Item = ({ classes }: Props) => {
  return (
    <li className={classes.root}>
      <Star className={classes.icon} />
    </li>
  )
}

export default withStyles(styles)(Item)
