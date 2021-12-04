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
      left: '-7.75rem',
      bottom: '39.9375rem',
      size: 'lg',
      color: 'quaternary',
    },
    {
      left: '-1.9375rem',
      bottom: '22.125rem',
      size: 'md',
      color: 'primary',
    },
    {
      left: '-9rem',
      bottom: '2.875rem',
      size: 'lg',
      color: 'secondary',
    },
    {
      right: '-4.75rem',
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
