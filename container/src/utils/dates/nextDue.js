import getFriendlyDate, { getIfDatesAreEqual } from './date'
import getPrevOccurrence from './prevOccurrence'

const addDaysToLastDue = (days, lastDue) => {
  const lastDueDate = new Date(lastDue)
  const newDays = lastDueDate.getDate() + days
  lastDueDate.setDate(newDays)
  return lastDueDate
}

const getMaxDaysInMonth = month => {
  const year = new Date().getFullYear()
  const lastDayOfMonth = new Date(year, month, 0)
  return lastDayOfMonth.getDate()
}

export const getIfDayOfMonthExceedsStartDate = (
  today,
  dayOfMonth,
  startDate
) => {
  const dayWithDayOfMonth = getMonthWithDate(today, dayOfMonth)
  return dayWithDayOfMonth > startDate
}

const getIfDateInMonthWillOccur = (dateNumber, startDate) => {
  const today = new Date()
  const dayOfMonthExceedsStartDate = getIfDayOfMonthExceedsStartDate(
    today,
    dateNumber,
    startDate
  )
  if (!dayOfMonthExceedsStartDate) return false
  return getIfDateNumberInDaysOfMonth(today, dateNumber)
}

const getDateCopy = date => new Date(date.getTime())

const getMonthWithDate = (dateWithMonth, dateNumber) => {
  const monthDate = getDateCopy(dateWithMonth)
  monthDate.setDate(dateNumber)
  return monthDate
}

const getNextMonthWithDate = (startMonth, dateNumber) => {
  const nextMonth = getDateCopy(startMonth)
  nextMonth.setMonth(startMonth.getMonth() + 1)
  return getMonthWithDate(nextMonth, dateNumber)
}

const getDateOfMonthWithDate = (dayOfMonth, startDate) => {
  const today = new Date()

  const thisMonthHasDate = getIfDateInMonthWillOccur(dayOfMonth, startDate)
  if (thisMonthHasDate) {
    return getMonthWithDate(today, dayOfMonth)
  } else if (today.getDate() === dayOfMonth && startDate <= today) {
    return today
  }
  return getNextMonthWithDate(today, dayOfMonth)
}

const getIfLastDueIsToday = (lastDue, today) => {
  const lastDueDate = new Date(lastDue)
  return getIfDatesAreEqual(today, lastDueDate)
}

const getNextDueForDaysInterval = (interval, startDate) => {
  const today = new Date()
  const prevOccurrence = getPrevOccurrence(interval, startDate)
  const wasDueToday = getIfLastDueIsToday(prevOccurrence, today)
  if (wasDueToday) return today
  else if (startDate > today) return startDate
  return addDaysToLastDue(interval.days, prevOccurrence)
}

const getNextDueDate = (interval, lastDue, startDate) => {
  const { dayOfMonth, type } = interval
  if (type === 'dayOfMonth') {
    return getDateOfMonthWithDate(dayOfMonth, startDate)
  }
  return getNextDueForDaysInterval(interval, startDate)
}

export const getFriendlyNextDueDate = (interval, lastDue, startDate) => {
  const nextDueDate = getNextDueDate(interval, lastDue, startDate)
  return getFriendlyDate(nextDueDate)
}

function getIfDateNumberInDaysOfMonth(today, dateNumber) {
  const month = today.getMonth()
  const maxDays = getMaxDaysInMonth(month)
  return today.getDate() <= dateNumber && dateNumber <= maxDays
}

export default getNextDueDate
