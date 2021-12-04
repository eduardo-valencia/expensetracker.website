import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  capitalize,
} from '@material-ui/core'
import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns'
import _ from 'lodash'

import SimpleTabsList from '../../SimpleTabsList'
import SimpleTab from '../../SimpleTab'
import { Period } from '../../../types/filters'
import {
  compareRanges,
  getRangeGenerator,
  getYearRange,
} from '../../../utils/range'
import { IRangeState } from '../types'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '1.875rem',
    },
  })
}

interface Props extends WithStyles<typeof styles>, IRangeState {}

const Suggestions = ({ classes, range, setRange }: Props) => {
  const getWeekRange = getRangeGenerator(startOfWeek, endOfWeek)

  const getMonthRange = getRangeGenerator(startOfMonth, endOfMonth)

  const getNewRange = (value: Period): IRangeState['range'] => {
    switch (value) {
      case 'week':
        return getWeekRange()
      case 'month':
        return getMonthRange()
      default:
        return getYearRange()
    }
  }

  const setNewRange = (value: Period): void => {
    const newRange: IRangeState['range'] = getNewRange(value as Period)
    setRange(newRange)
  }

  const handleChange = (event: any, value: Period) => {
    setNewRange(value)
  }

  const renderTab = (period: Period): JSX.Element => {
    return <SimpleTab value={period} label={capitalize(period)} key={period} />
  }

  const getIfRangeIsSelected = (newRange: IRangeState['range']): boolean =>
    compareRanges(newRange, range)

  const getIfWeekIsSelected = (): boolean => {
    const weekRange = getWeekRange()
    return getIfRangeIsSelected(weekRange)
  }

  const getIfMonthIsSelected = (): boolean => {
    const monthRange = getMonthRange()
    return getIfRangeIsSelected(monthRange)
  }

  const getValue = (): Period => {
    const weekSelected: boolean = getIfWeekIsSelected()
    const monthSelected: boolean = getIfMonthIsSelected()
    if (weekSelected) {
      return 'week'
    } else if (monthSelected) {
      return 'month'
    }
    return 'year'
  }

  const periods: Period[] = ['week', 'month', 'year']
  const renderedTabs: JSX.Element[] = periods.map(renderTab)
  const selectedPeriod: Period = getValue()

  return (
    <SimpleTabsList onChange={handleChange} value={selectedPeriod}>
      {renderedTabs}
    </SimpleTabsList>
  )
}

export default withStyles(styles)(Suggestions)
