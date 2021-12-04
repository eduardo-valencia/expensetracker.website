const getDaysInMilliseconds = days => {
  const msInSec = 1000
  const secsInHour = 60
  const minsInHour = 60
  const hoursInDay = 24
  return msInSec * secsInHour * minsInHour * hoursInDay * days
}

const getDaysBetweenStartAndLastDue = (days, startDate) => {
  const today = new Date()
  const msSinceStartDate = today.getTime() - startDate.getTime()
  const daysInMs = getDaysInMilliseconds(days)
  const occurrences = Math.floor(msSinceStartDate / daysInMs)
  return occurrences * days
}

const getLastDueRegular = (days, startDate) => {
  const daysToLastDue = getDaysBetweenStartAndLastDue(days, startDate)
  const lastDue = new Date(startDate.getTime())
  lastDue.setDate(startDate.getDate() + daysToLastDue)
  return lastDue
}

const getMonthWithDay = (dateInMonth, dayOfMonth) => {
  const monthWithDay = new Date(dateInMonth.getTime())
  monthWithDay.setDate(dayOfMonth)
  return monthWithDay
}

const getPreviousMonthWithDay = day => {
  const previousMonth = new Date()
  previousMonth.setMonth(previousMonth.getMonth() - 1)
  return getMonthWithDay(previousMonth, day)
}

const getLastDueForDayOfMonth = dayOfMonth => {
  const today = new Date()
  if (today.getDate() === dayOfMonth) {
    return today
  } else if (today.getDate() > dayOfMonth) {
    return getMonthWithDay(today, dayOfMonth)
  }
  return getPreviousMonthWithDay(dayOfMonth)
}

const getPrevOccurrence = ({ days, dayOfMonth, type }, startDate) => {
  if (type === 'regular') {
    return getLastDueRegular(days, startDate)
  }
  return getLastDueForDayOfMonth(dayOfMonth)
}

export default getPrevOccurrence
