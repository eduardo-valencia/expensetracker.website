import '../testSetup'
import getNextDueDate from './nextDue'
import { getIfDatesAreEqual } from './date'
import { add } from 'date-fns'

describe('getNextDueDate', () => {
  const today = new Date()
  const getTomorrow = () => {
    const tomorrow = new Date(today.getTime())
    tomorrow.setDate(today.getDate() + 1)
    return tomorrow
  }

  it('Should add the days when given an interval of days.', () => {
    const tomorrow = getTomorrow()
    const nextDueDate = getNextDueDate(
      { type: 'days', days: 1 },
      null,
      tomorrow
    )
    const areDatesSame = getIfDatesAreEqual(tomorrow, nextDueDate)
    expect(areDatesSame).toBe(true)
  })

  const getNextDueWithDayOfMonth = (dayOfMonth, month) => {
    const dayAfterDayOfMonth = new Date(2019, month, dayOfMonth + 1)
    return getNextDueDate(
      { type: 'dayOfMonth', dayOfMonth },
      null,
      dayAfterDayOfMonth
    )
  }

  const getNextMonthNumber = (date) => {
    const nextMonth = add(startDate, { months: 1 })
    return nextMonth.getMonth()
  }

  const testNextDueIsNextMonth = (dayOfMonth, month) => {
    const dueDate = getNextDueWithDayOfMonth(dayOfMonth, month)
    // Because months are zero-indexed
    const nextMonthNumber = month === 11 ? 0 : month + 1
    expect(dueDate.getMonth()).toBe(nextMonthNumber)
    expect(dueDate.getDate()).toBe(dayOfMonth)
  }

  const testDayOfMonth = () => {
    const dayOfMonth = today.getDate() - 1
    const month = today.getMonth()
    testNextDueIsNextMonth(dayOfMonth, month)
  }

  it('Should return the next month with the dayOfMonth when the interval type is dayOfMonth.', () => {
    testDayOfMonth()
  })

  it('Should return the next month when the start date prevents the next date from being the current month.', () => {
    const startDate = getTomorrow()
    const dayOfMonth = startDate.getDate() - 1
    const nextDue = getNextDueDate(
      { type: 'dayOfMonth', dayOfMonth },
      null,
      startDate
    )
    const nextMonthNumber = getNextMonthNumber(startDate)
    expect(nextDue.getMonth()).toBe(nextMonthNumber)
  })
})
