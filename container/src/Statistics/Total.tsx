import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
  Theme,
} from '@material-ui/core'

import { useAppSelector } from '../hooks/selector'
import { selectRange } from '../reducers/ranges/range'
import { compareRanges, getDayRange } from '../utils/range'
import { formatAmountWithDecimals } from '../utils/formatters/amount'
import { display1 } from '../styles/typography'
import { getTotal } from '../utils/total'
import ITransaction from '../types/Transaction'

const styles = ({ palette: { text }, typography: { buttonSm } }: Theme) => {
  return createStyles<'root' | 'title' | 'description', {}>({
    root: {
      marginBottom: '1.6875rem',
    },
    title: {
      ...display1,
    },
    description: {
      color: text.tertiary,
      ...buttonSm,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  transactions: ITransaction[]
}

const Total = ({ classes, transactions }: Props) => {
  const { range } = useAppSelector(selectRange)
  const { minDate, maxDate } = range

  const defaultLabel: string = 'Spent'

  const getLabelFromValidRange = (): string => {
    const today: Date = new Date()
    const todayRange = getDayRange(today)
    const rangeIsToday: boolean = compareRanges(todayRange, range)
    return rangeIsToday ? 'Spent today' : defaultLabel
  }

  const getLabel = (): string => {
    if (minDate && maxDate) {
      return getLabelFromValidRange()
    }
    return defaultLabel
  }

  const label: string = getLabel()
  const total: number = getTotal(transactions)
  const formattedAmount: string = formatAmountWithDecimals(total)

  return (
    <div className={classes.root}>
      <Typography component="h1" className={classes.title}>
        ${formattedAmount}
      </Typography>
      <Typography className={classes.description}>{label}</Typography>
    </div>
  )
}

export default withStyles(styles)(Total)
