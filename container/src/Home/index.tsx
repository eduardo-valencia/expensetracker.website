import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Hero from './Hero'
import Smart from './Smart'
import Bills from './Bills'
import Reports from './Reports'
import CallToAction from './CallToAction'
import Testimonials from './Testimonials'
import LandingNav from '../components/Layout/LandingNav'
import FeaturePageLayout from '../components/FeaturePageLayout'

const styles = () => {
  return createStyles({
    root: {
      padding: '0 !important',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Home = ({ classes }: Props) => {
  return (
    <FeaturePageLayout
      requireAuth={false}
      nav={<LandingNav />}
      className={classes.root}
    >
      <Hero />
      <Smart />
      <Bills />
      <Reports />
      <CallToAction />
      <Testimonials />
    </FeaturePageLayout>
  )
}

export default withStyles(styles)(Home)
