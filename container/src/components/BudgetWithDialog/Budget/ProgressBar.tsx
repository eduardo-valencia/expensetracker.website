import React from 'react'
import {
  createStyles,
  withStyles,
  WithStyles,
  LinearProgress,
} from '@material-ui/core'

import IBudget from '../../../types/Budget'

const styles = () => {
  return createStyles({
    root: {
      height: '0.25rem',
      width: '100%',
      borderRadius: '3.125rem',
      backgroundColor: '#FFE6DF',
      marginTop: '0.4375rem',
    },
  })
}

interface Props
  extends Pick<IBudget, 'amount' | 'total'>,
    WithStyles<typeof styles> {}

function BudgetProgressBar({ amount, total, classes }: Props) {
  const getPercentage = (): number => {
    const basePercentage: number = Math.abs(total / amount) * 100
    if (basePercentage > 100) {
      return 100
    } else if (basePercentage < 0) {
      return 0
    }
    return basePercentage
  }

  return (
    <LinearProgress
      value={getPercentage()}
      color="primary"
      classes={classes}
      variant="determinate"
      aria-label="Amount spent of total budget"
    />
  )
}

export default withStyles(styles)(BudgetProgressBar)
