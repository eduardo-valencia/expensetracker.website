import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
  Theme,
} from '@material-ui/core'

import BaseIcon from './Icon'
import { Author as AuthorType } from './types'

const styles = ({
  breakpoints: { up },
  palette: {
    text: { secondary },
  },
}: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2.25rem',
      [up('md')]: {
        marginBottom: '4rem',
      },
    },
    name: {
      fontSize: '1.25rem',
      lineHeight: '1.25rem',
      marginBottom: '0.8125rem',
    },
    title: {
      color: secondary,
    },
  })
}

interface Props extends WithStyles<typeof styles>, AuthorType {
  Icon?: typeof BaseIcon
}

const AuthorInfo = ({ classes, icon, name, title, Icon = BaseIcon }: Props) => {
  return (
    <div className={classes.root}>
      <Icon name={name} icon={icon} />
      <div>
        <Typography variant="h3" className={classes.name}>
          {name}
        </Typography>
        <Typography variant="body1" className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(AuthorInfo)
