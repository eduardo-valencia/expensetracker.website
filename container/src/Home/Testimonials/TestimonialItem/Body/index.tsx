import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Hidden,
  Typography,
} from '@material-ui/core'

import Stars from './Stars'
import { Testimonial, TestimonialsAmount, TestimonialsState } from '../../types'
import Author from './Author'
import Nav from './Nav'

const styles = ({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  const xl = up('xl')

  return createStyles({
    title: {
      marginBottom: '1rem',
      [md]: {
        marginBottom: '0.8125rem',
      },
      [xl]: {
        marginBottom: '2.0625rem',
      },
    },
    content: {
      marginBottom: '2.25rem',
      [up('xl')]: {
        lineHeight: '2.125rem',
        marginBottom: '4.0625rem',
        letterSpacing: '-0.0413rem',
      },
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<Testimonial, 'image'>,
    TestimonialsState {
  testimonials: TestimonialsAmount
}

const Body = ({ classes, stars, content, author, ...other }: Props) => {
  return (
    <div>
      <Typography variant="h2" className={classes.title}>
        Client{' '}
        <Hidden lgDown>
          <br />
        </Hidden>
        Testimonials
      </Typography>
      <Stars stars={stars} />
      <Typography
        variant="body1"
        className={classes.content}
        color="textPrimary"
      >
        "{content}"
      </Typography>
      <Author {...author} />
      <Nav {...other} />
    </div>
  )
}

export default withStyles(styles)(Body)
