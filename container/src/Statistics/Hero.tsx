import React from 'react'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core'

import DateFilter from './DateFilter'
import Hero from '../components/Hero'
import { flexRowBreakpoint } from './styles'
import { IRangeState } from '../components/RangeSelector/types'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      [up(flexRowBreakpoint)]: {
        flexDirection: 'row',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles>, IRangeState {}

function StatisticsHero({ classes, ...other }: Props) {
  return (
    <Hero
      title="Statistics"
      right={<DateFilter {...other} />}
      classes={classes}
    />
  )
}

export default withStyles(styles)(StatisticsHero)
