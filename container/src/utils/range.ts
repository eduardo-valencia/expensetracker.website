import { endOfDay, endOfYear, isEqual, startOfDay, startOfYear } from 'date-fns'

import { IRangeState } from '../components/RangeSelector/types'
import { Range } from '../types/RootState'

const getMonthStart = (date: Date) => {
  let monthStart = new Date(date.getTime())
  monthStart.setDate(1)
  return monthStart
}

const getDateOfLastDateInMonth = (date: Date) => {
  date.setMonth(date.getMonth() + 1)
  date.setDate(-1)
  return date
}

const getMonthEnd = (date: Date) => {
  let monthEnd = new Date(date.getTime())
  let lastDateInMonth = getDateOfLastDateInMonth(monthEnd)
  lastDateInMonth.setHours(23)
  lastDateInMonth.setMinutes(59)
  return lastDateInMonth
}

export const getMonthRange = (date: Date) => {
  const monthStart = getMonthStart(date)
  const monthEnd = getMonthEnd(date)
  return { minDate: monthStart, maxDate: monthEnd }
}

export const getNewRange = (
  selectedPeriod: 'daily' | 'monthly' | 'present' | 'all',
  date: Date
) => {
  switch (selectedPeriod) {
    case 'daily':
      return { minDate: date, maxDate: date }
    case 'monthly':
      return getMonthRange(date)
    case 'present':
      return { minDate: null, maxDate: new Date() }
    default:
      return { minDate: null, maxDate: null }
  }
}

type CreateRangeDate = (date: Date) => Date

export const getRangeGenerator = (
  createMinDate: CreateRangeDate,
  createMaxDate: CreateRangeDate
) => {
  return (date: Date = new Date()): IRangeState['range'] => {
    return {
      minDate: createMinDate(date),
      maxDate: createMaxDate(date),
    }
  }
}

const compareRangeDates = (
  range1: Range,
  range2: Range,
  property: keyof Range
) => {
  const date1: Date | null = range1[property]
  const date2: Date | null = range2[property]
  if (date1 === null || date2 === null) return date1 === date2
  return isEqual(date1, date2)
}

export const compareRanges = (range1: Range, range2: Range): boolean => {
  const minDatesAreEqual: boolean = compareRangeDates(range1, range2, 'minDate')
  const maxDatesAreEqual: boolean = compareRangeDates(range1, range2, 'maxDate')
  return minDatesAreEqual && maxDatesAreEqual
}

export const getDayRange = (day: Date): IRangeState['range'] => {
  return { minDate: startOfDay(day), maxDate: endOfDay(day) }
}

export const getYearRange = getRangeGenerator(startOfYear, endOfYear)
