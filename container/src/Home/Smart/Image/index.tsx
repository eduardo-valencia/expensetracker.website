import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import BaseImageContainer from '../../../components/Section/ImageContainer'
import { EllipseStyles } from '../../../components/Section/ImageContainer/Ellipse'
import StatisticsMockup from '../../../components/StatisticsMockup'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const ImageContainer = ({ classes }: Props) => {
  const ellipses: EllipseStyles[] = [
    {
      left: '-3.8125rem',
      bottom: '1.9375rem',
      size: 'xl',
      color: 'secondary',
    },
    {
      left: '-0.75rem',
      bottom: '22.125rem',
      size: 'md',
      color: 'primary',
    },
    {
      right: '-5.5rem',
      bottom: '26.4375rem',
      size: 'sm',
      color: 'tertiary',
    },
  ]

  return (
    <BaseImageContainer ellipses={ellipses}>
      <StatisticsMockup />
    </BaseImageContainer>
  )
}

export default withStyles(styles)(ImageContainer)
