import '../testSetup'
import { getIfDaysTypeIsDue, getIfDayOfMonthIsDue } from './isDue'
import { getTomorrow } from './date'

const today = new Date()
const tomorrow = getTomorrow()

describe('getIfDayOfMonthIsDue', () => {
  it('Should return false when the start date is greater than the selected date.', () => {
    expect(getIfDayOfMonthIsDue(tomorrow, 30, today)).toBe(false)
  })

  it('Should return whent the start date equals the selected date and it is the dayOfMonth.', () => {
    const dayOfMonth = today.getDate()
    expect(getIfDayOfMonthIsDue(today, dayOfMonth, today)).toBe(true)
  })

  it('Should return true when the start date is < the selected date, but it is the dayOfMonth.', () => {
    const dayOfMonth = tomorrow.getDate()
    expect(getIfDayOfMonthIsDue(tomorrow, dayOfMonth, today))
  })
})

describe('getIfDaysTypeIsDue', () => {
  it('Should return false when the start date exceeds the selected date.', () => {
    expect(getIfDaysTypeIsDue(today, 10, tomorrow)).toBe(false)
  })

  it('Should return false when the interval does not land on the selected date.', () => {
    expect(getIfDaysTypeIsDue(tomorrow, 3, today)).toBe(false)
  })

  it('Should return true when the interval lands on the selected date.', () => {
    expect(getIfDaysTypeIsDue(tomorrow, 1, today)).toBe(true)
  })
})
