import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import Image from './Image'
import { Testimonial, TestimonialsAmount, TestimonialsState } from '../types'
import Body from './Body'
import { flexBreakpoint } from './styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      [up(flexBreakpoint)]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Testimonial,
    TestimonialsState {
  testimonials: TestimonialsAmount
}

const TestimonialItem = ({ classes, image, author, ...other }: Props) => {
  return (
    <div className={classes.root}>
      <Image image={image} name={author.name} />
      <Body author={author} {...other} />
    </div>
  )
}

export default withStyles(styles)(TestimonialItem)
