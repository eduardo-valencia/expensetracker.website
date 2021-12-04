import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Screenshot from '../../../components/Section/Screenshot'
import SectionImageContainer from '../../../components/Section/ImageContainer'
import TransactionsSvg from './transactions.svg'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const ImageContainer = ({ classes }: Props) => {
  return (
    <SectionImageContainer
      ellipses={[
        {
          size: 'md',
          left: '-1.9375rem',
          bottom: '22.125rem',
          color: 'primary',
        },
        {
          left: '-8.0625rem',
          bottom: '1.9375rem',
          size: 'xl',
          color: 'secondary',
        },
      ]}
    >
      <Screenshot Image={TransactionsSvg} />
    </SectionImageContainer>
  )
}

export default withStyles(styles)(ImageContainer)
