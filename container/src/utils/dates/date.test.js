import { compareDateProps } from './date'

describe('compareDateProps', () => {
  const gettersForDateInfo = [
    date => date.getDate(),
    date => date.getFullYear(),
    date => date.getMonth()
  ]
  const today = new Date()

  it('Should return true when two dates have equal props for years, dates, and months.', () => {
    const arePropsEqual = compareDateProps(today, today, gettersForDateInfo)
    expect(arePropsEqual).toBe(true)
  })

  it('Should not return true when any one prop is different.', () => {
    const someOtherDay = new Date(2019, 1, 1)
    const arePropsEqual = compareDateProps(
      today,
      someOtherDay,
      gettersForDateInfo
    )
    expect(arePropsEqual).toBe(false)
  })
})
