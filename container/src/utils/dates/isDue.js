import { getIfDatesAreEqual } from './date'
import { getIfDayOfMonthExceedsStartDate } from './nextDue'

const getIfStartsOnDay = (dateToCheck, startDate, dayOfMonth) => {
  const startDateIsOnDate = getIfDatesAreEqual(dateToCheck, startDate)
  const startsToday = dateToCheck.getDate() === dayOfMonth && startDateIsOnDate
  return startDateIsOnDate && startsToday
}

const getIfContinuesToday = (dateToCheck, startDate, dayOfMonth) => {
  const dayOfMonthExceedsStartDate = getIfDayOfMonthExceedsStartDate(
    dateToCheck,
    dayOfMonth,
    startDate
  )
  return dayOfMonthExceedsStartDate && dateToCheck.getDate() === dayOfMonth
}

export const getIfDayOfMonthIsDue = (dateToCheck, dayOfMonth, startDate) => {
  const startsOnDate = getIfStartsOnDay(dateToCheck, startDate, dayOfMonth)
  if (startsOnDate) return true
  const continuesToday = getIfContinuesToday(dateToCheck, startDate, dayOfMonth)
  if (continuesToday) return true
  return false
}

const getIfStartDateExceedsDate = (dateToCheck, startDate) => {
  const areDatesSame = getIfDatesAreEqual(dateToCheck, startDate)
  return !areDatesSame && startDate > dateToCheck
}

const getDaysInMilliseconds = days => {
  const msInSec = 1000
  const secsInHour = 60
  const minsInHour = 60
  const hoursInDay = 24
  return msInSec * secsInHour * minsInHour * hoursInDay * days
}

const getDaysBetweenStartAndLastDue = (days, dateToCheck, startDate) => {
  const msSinceStartDate = dateToCheck.getTime() - startDate.getTime()
  const daysInMs = getDaysInMilliseconds(1)
  return Math.floor(msSinceStartDate / daysInMs)
}

export const getIfDaysTypeIsDue = (dateToCheck, days, startDate) => {
  const startDateExceedsDate = getIfStartDateExceedsDate(dateToCheck, startDate)
  if (startDateExceedsDate) return false
  const diffInDays = getDaysBetweenStartAndLastDue(days, dateToCheck, startDate)
  return diffInDays % days === 0
}

export const getIfIsScheduledForDate = (
  dateToCheck,
  { type, days, dayOfMonth },
  startDateString
) => {
  const startDate = new Date(startDateString)
  if (type === 'dayOfMonth') {
    return getIfDayOfMonthIsDue(dateToCheck, dayOfMonth, startDate)
  }
  return getIfDaysTypeIsDue(dateToCheck, days, startDate)
}
