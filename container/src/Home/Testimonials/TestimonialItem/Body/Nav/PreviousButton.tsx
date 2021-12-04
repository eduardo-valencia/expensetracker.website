import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import { TestimonialsAmount, TestimonialsState } from '../../../types'
import UnderlinedButton from '../../../../../components/UnderlinedButton'

const styles = ({
  palette: {
    text: { secondary },
  },
}: Theme) => {
  return createStyles({
    root: {
      color: secondary,
      borderColor: secondary,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  testimonialsIndex: TestimonialsAmount
  goToPrevSlide: TestimonialsState['goToPrevSlide']
}

const PreviousButton = ({
  classes,
  testimonialsIndex,
  goToPrevSlide,
}: Props) => {
  const previousSlideExists: boolean = testimonialsIndex > 0
  return (
    <UnderlinedButton
      classes={classes}
      onClick={goToPrevSlide}
      disabled={!previousSlideExists}
    >
      Prev Story
    </UnderlinedButton>
  )
}

export default withStyles(styles)(PreviousButton)
