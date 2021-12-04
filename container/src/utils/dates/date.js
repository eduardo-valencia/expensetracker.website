import { formatDate } from '../formatters/date'

const getDaysBetweenTodayAndDate = (date) => {
  const today = new Date()
  return date.getDate() - today.getDate()
}

const getDayName = (date) => {
  const regularWeekday = { weekday: 'long' }
  const dayName = date.toLocaleString('default', regularWeekday)
  return dayName.toLowerCase()
}

const getFriendlyDate = (date) => {
  const daysUntilSelectedDate = getDaysBetweenTodayAndDate(date)
  switch (daysUntilSelectedDate) {
    case 0:
      return 'today'
    case 1:
      return 'tomorrow'
    default:
      if (daysUntilSelectedDate < 7 && daysUntilSelectedDate > 0) {
        return getDayName(date)
      }
      return formatDate(date)
  }
}

export default getFriendlyDate

const findNotEqualProp = (getDateProp, firstDate, secondDate) => {
  return getDateProp(secondDate) !== getDateProp(firstDate)
}

export const compareDateProps = (firstDate, secondDate, dateInfoGetters) => {
  const notEqualPropFound = dateInfoGetters.find((getDateProp) =>
    findNotEqualProp(getDateProp, firstDate, secondDate)
  )
  return !notEqualPropFound
}

export const getIfDatesAreEqual = (currentDate, secondDate) => {
  const gettersForDateInfo = [
    (date) => date.getDate(),
    (date) => date.getFullYear(),
    (date) => date.getMonth(),
  ]
  return compareDateProps(currentDate, secondDate, gettersForDateInfo)
}

export const getNextMonth = (date) => {
  const nextMonth = new Date(date.getTime())
  const currentMonth = nextMonth.getMonth()
  nextMonth.setMonth(currentMonth + 1)
  return nextMonth
}

export const getDaysAfterToday = (days = 1) => {
  const today = new Date()
  const tomorrow = new Date(today.getTime())
  tomorrow.setDate(today.getDate() + days)
  return tomorrow
}

export const getTomorrow = () => getDaysAfterToday()
