import '../../utils/testSetup'
import { getTomorrow, getDaysAfterToday, getIfDatesAreEqual } from './date'
import {
  getRangeCompatibleWithStartDate,
  getRangeCompatibleWithFuture,
  getDatesListFromRange
} from './range'

const today = new Date()
const tomorrow = getTomorrow()
const theDayAfterTomorrow = getDaysAfterToday(2)

describe('getRangeCompatibleWithStartDate', () => {
  it('Should return the full range when it is greater than the start date.', () => {
    const range = getRangeCompatibleWithStartDate(
      today,
      tomorrow,
      theDayAfterTomorrow
    )
    expect(range === null).toBe(false)
    expect(range.minDate).toBe(tomorrow)
    expect(range.maxDate).toBe(theDayAfterTomorrow)
  })

  it('Should return a partial range when the start date lands on the maxDate', () => {
    const range = getRangeCompatibleWithStartDate(
      theDayAfterTomorrow,
      today,
      theDayAfterTomorrow
    )
    expect(range.minDate).toBe(theDayAfterTomorrow)
    expect(range.maxDate).toBe(theDayAfterTomorrow)
  })

  it('Should return the part of the range compatible if the full range is not compatible.', () => {
    const range = getRangeCompatibleWithStartDate(
      tomorrow,
      today,
      theDayAfterTomorrow
    )
    expect(range.minDate).toBe(tomorrow)
    expect(range.maxDate).toBe(theDayAfterTomorrow)
  })

  it('Should return null when the full range is incompatible.', () => {
    const range = getRangeCompatibleWithStartDate(
      theDayAfterTomorrow,
      tomorrow,
      today
    )
    expect(range).toBe(null)
  })
})

describe('getRangeCompatibleWithFuture', () => {
  it('Should return the full range when it is in the future.', () => {
    const range = getRangeCompatibleWithFuture(tomorrow, theDayAfterTomorrow)
    expect(range.minDate).toBe(tomorrow)
    expect(range.maxDate).toBe(theDayAfterTomorrow)
  })

  it('Should return the part of the range compatible if the full range is not compatible.', () => {
    const range = getRangeCompatibleWithFuture(today, theDayAfterTomorrow)
    const minDateIsTomorrow = getIfDatesAreEqual(range.minDate, tomorrow)
    expect(minDateIsTomorrow).toBe(true)
    expect(range.maxDate).toBe(theDayAfterTomorrow)
  })
})

describe('getDatesListFromRange', () => {
  const dates = getDatesListFromRange({
    minDate: today,
    maxDate: theDayAfterTomorrow
  })

  it('Should return the correct number of days.', () => {
    expect(dates.length).toBe(3)
  })

  it('Should return the dates in order.', () => {
    const expectedDates = [today, tomorrow, theDayAfterTomorrow]
    expectedDates.forEach((date, index) => {
      const receivedDate = dates[index]

      const datesAreEqual = getIfDatesAreEqual(receivedDate, date)
      console.log(receivedDate)
      expect(datesAreEqual).toBe(true)
    })
  })
})
