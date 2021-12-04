import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import BaseImageContainer from '../../../components/Section/ImageContainer'
import { EllipseStyles } from '../../../components/Section/ImageContainer/Ellipse'
import Screenshot from '../../../components/Section/Screenshot'
import BillsSvg from './bills.svg'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const ImageContainer = ({ classes }: Props) => {
  const ellipses: EllipseStyles[] = [
    {
      left: '-5.4375rem',
      bottom: '32.5rem',
      size: 'md',
      color: 'primary',
    },
  ]

  return (
    <BaseImageContainer ellipses={ellipses}>
      <Screenshot Image={BillsSvg} />
    </BaseImageContainer>
  )
}

export default withStyles(styles)(ImageContainer)
