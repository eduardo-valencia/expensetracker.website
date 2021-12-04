import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { display1 } from '../styles/typography'

const styles = ({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  const xl = up('xl')
  return createStyles({
    root: {
      marginTop: '3.8125rem',
      marginBottom: '3.4375rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [md]: {
        marginTop: '4.25rem',
        marginBottom: '2.8125rem',
      },
      [xl]: {
        marginTop: '6.125rem',
      },
    },
    title: {
      marginRight: '1rem',
      lineHeight: 1,
      [md]: display1,
    },
  })
}

export interface HeroProps extends WithStyles<typeof styles> {
  title: string
  right?: React.ReactNode
}

const Hero = ({ classes, title, right = null }: HeroProps) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      {right}
    </div>
  )
}

export default withStyles(styles)(Hero)
