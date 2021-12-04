import { SET_STATS_MONTH } from '../types'
import { fetchMonthTotals } from '../total'

export const setStatsMonth = month => dispatch => {
  dispatch({
    type: SET_STATS_MONTH,
    payload: month
  })
  dispatch(fetchMonthTotals())
}
