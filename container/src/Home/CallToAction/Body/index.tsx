import React from 'react'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'

import SectionBody from '../../../components/Section/Body'
import SignUp from '../../../components/ResponsiveSignInButton'
import Title from './Title'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: 0,
    },
    titleAndDescription: {
      marginBottom: '1.875rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

function Body({ classes }: Props) {
  return (
    <SectionBody
      classes={classes}
      title={
        <>
          Use a better tool to
          <br /> manage your finances
        </>
      }
      maxWidthLg="30.875rem"
      Title={Title}
    >
      <SignUp color="secondary" />
    </SectionBody>
  )
}

export default withStyles(styles)(Body)
