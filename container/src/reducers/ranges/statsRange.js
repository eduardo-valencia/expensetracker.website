import { SET_STATS_MONTH } from '../../actions/types'

const getCurrentMonth = () => {
  const firstDayOfMonth = new Date()
  firstDayOfMonth.setDate(1)
  firstDayOfMonth.setHours(0, 0, 0, 0)
  return firstDayOfMonth
}

const currentMonth = getCurrentMonth()
export default function reduceStatsMonth(
  month = currentMonth,
  { type, payload }
) {
  return type === SET_STATS_MONTH ? payload : month
}
