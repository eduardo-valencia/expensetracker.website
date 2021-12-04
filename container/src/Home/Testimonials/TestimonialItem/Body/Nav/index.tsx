import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import { TestimonialsAmount, TestimonialsState } from '../../../types'
import UnderlinedButton from '../../../../../components/UnderlinedButton'
import PreviousButton from './PreviousButton'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
}

interface Props extends WithStyles<typeof styles>, TestimonialsState {
  testimonials: TestimonialsAmount
}

const Nav = ({
  classes,
  testimonialIndex,
  goToNextSlide,
  goToPrevSlide,
  testimonials,
}: Props) => {
  const nextSlideExists: boolean = testimonialIndex < testimonials - 1

  return (
    <div className={classes.root}>
      <PreviousButton
        goToPrevSlide={goToPrevSlide}
        testimonialsIndex={testimonialIndex}
      />
      <UnderlinedButton onClick={goToNextSlide} disabled={!nextSlideExists}>
        Next Story
      </UnderlinedButton>
    </div>
  )
}

export default withStyles(styles)(Nav)
