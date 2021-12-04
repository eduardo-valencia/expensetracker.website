import { getTomorrow, getIfDatesAreEqual } from './date'

export const getRangeCompatibleWithStartDate = (
  startDate,
  minDate,
  maxDate
) => {
  const fullRangeIsFuture = minDate > startDate
  if (fullRangeIsFuture) {
    return { minDate, maxDate }
  }
  const startDateEqualToMax = getIfDatesAreEqual(startDate, maxDate)
  if (maxDate > startDate || startDateEqualToMax) {
    return { minDate: startDate, maxDate }
  }
  return null
}

export const getRangeCompatibleWithFuture = (minDate, maxDate) => {
  const tomorrow = getTomorrow()
  const minDateIsTomorrow = getIfDatesAreEqual(tomorrow, minDate)
  if (minDate > tomorrow || minDateIsTomorrow) {
    return { minDate, maxDate }
  }
  return { minDate: tomorrow, maxDate }
}

export const getDatesListFromRange = ({ minDate, maxDate }) => {
  // Includes the maximum date
  let dates = [minDate]
  let currentDate = new Date(minDate.getTime())

  while (currentDate < maxDate) {
    const prevDays = currentDate.getDate()
    currentDate.setDate(prevDays + 1)
    const newDate = new Date(currentDate.getTime())
    dates.push(newDate)
  }
  return dates
}

export const getCompatibleDates = (startDate, minDate, maxDate) => {
  const rangeGreaterThanStartDate = getRangeCompatibleWithStartDate(
    startDate,
    minDate,
    maxDate
  )
  if (rangeGreaterThanStartDate) {
    const { minDate, maxDate } = rangeGreaterThanStartDate
    const compatibleDates = getRangeCompatibleWithFuture(minDate, maxDate)
    return getDatesListFromRange(compatibleDates)
  }
  return []
}
