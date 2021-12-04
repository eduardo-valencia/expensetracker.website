import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { FeatureInfo } from './types'
import { getSize } from '../../../../utils/styles'

const styles = ({ breakpoints: { up }, palette: { primary } }: Theme) => {
  const md = up('md')
  const xl = up('xl')
  return createStyles({
    root: {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'flex-start',
      [md]: {
        alignItems: 'center',
      },
      '& + &': {
        marginTop: '1.875rem',
        [md]: {
          marginTop: '2.875rem',
        },
        [xl]: {
          marginTop: '2.5rem',
        },
      },
    },
    icon: {
      ...getSize('1.875rem'),
      flexShrink: 0,
      marginRight: '1.3125rem',
      fill: primary.main,
      [md]: {
        marginRight: '3.8125rem',
      },
      [xl]: {
        marginRight: '2.8125rem',
      },
    },
    body: {
      maxWidth: '25.9375rem',
    },
    title: {
      marginBottom: '0.8125rem',
      [xl]: {
        marginBottom: '1.25rem',
      },
    },
    description: {
      fontSize: '0.875rem',
      lineHeight: '1.75rem',
      [md]: {
        fontSize: '1rem',
        lineHeight: '2.125rem',
      },
      [xl]: {
        lineHeight: '1.75rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles>, FeatureInfo {}

const Feature = ({ classes, Icon, title, description }: Props) => {
  return (
    <li className={classes.root}>
      <Icon className={classes.icon} />
      <div className={classes.body}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography color="textSecondary" className={classes.description}>
          {description}
        </Typography>
      </div>
    </li>
  )
}

export default withStyles(styles)(Feature)
