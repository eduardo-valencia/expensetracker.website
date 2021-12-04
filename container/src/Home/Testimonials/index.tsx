import React, { useState } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Container,
  Theme,
} from '@material-ui/core'
import { sections } from '@supercoder.dev/expense-tracker-common'

import { Testimonial, TestimonialsState } from './types'
import TestimonialItem from './TestimonialItem'
import { flexBreakpoint } from './TestimonialItem/styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginBottom: '4.5rem',
    },
    container: {
      [up(flexBreakpoint)]: {
        padding: 0,
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Testimonials = ({ classes }: Props) => {
  const [testimonialIndex, setTestimonialIndex] =
    useState<TestimonialsState['testimonialIndex']>(0)

  const image = 'testimonial-image.jpg'
  const icon = 'supercoder-icon.svg'

  const testimonials: Testimonial[] = [
    {
      image,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
      stars: 5,
      author: {
        name: 'Eduardo Valencia',
        title: 'Founder & CEO',
        icon,
      },
    },
    {
      image,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.',
      stars: 4,
      author: {
        name: 'Eduardo Valencia 2',
        title: 'Founder & CEO',
        icon,
      },
    },
  ]

  const testimonialData: Testimonial = testimonials[testimonialIndex]

  const goToNextSlide = () => setTestimonialIndex(testimonialIndex + 1)

  const goToPreviousSlide = () => setTestimonialIndex(testimonialIndex - 1)

  return (
    <section className={classes.root} id={sections.testimonials}>
      <Container className={classes.container}>
        <TestimonialItem
          {...testimonialData}
          testimonials={testimonials.length}
          goToNextSlide={goToNextSlide}
          goToPrevSlide={goToPreviousSlide}
          testimonialIndex={testimonialIndex}
        />
      </Container>
    </section>
  )
}

export default withStyles(styles)(Testimonials)
