import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'

import Nav from './Nav'
import Testimonial from './Testimonial'
import { flexBreakpoint } from './styles'
import Footer from './Footer'
import FeaturePageLayout from '../FeaturePageLayout'

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

interface Props extends WithStyles<typeof styles> {
  body: React.ReactChild
}

const AuthForm = ({ classes, body }: Props) => {
  return (
    <ScopedCssBaseline>
      <FeaturePageLayout nav={<Nav />} footer={<Footer />}>
        <div className={classes.root}>
          {body}
          <Testimonial />
        </div>
      </FeaturePageLayout>
    </ScopedCssBaseline>
  )
}

export default withStyles(styles)(AuthForm)
