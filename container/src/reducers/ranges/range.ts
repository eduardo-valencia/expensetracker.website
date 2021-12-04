import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isEqual } from 'date-fns'
import RootState, { Range } from '../../types/RootState'
import { getNewRange } from '../../utils/range'

export const rangeSlice = createSlice({
  name: 'range',
  initialState: { minDate: null, maxDate: null },
  reducers: {
    setRange: (
      state: Range,
      { payload: { minDate, maxDate } }: PayloadAction<Range>
    ) => {
      state.maxDate = maxDate
      state.minDate = minDate
    },

    setRangeDay: (state: Range, { payload }: PayloadAction<Date>) => {
      const { minDate, maxDate }: Range = getNewRange('daily', payload)
      state.minDate = minDate
      state.maxDate = maxDate
    },
  },
})

export const { setRange, setRangeDay } = rangeSlice.actions

const getIfSingleDaySelected = ({ minDate, maxDate }: Range): boolean => {
  if (!minDate || !maxDate) return minDate === maxDate
  return isEqual(minDate, maxDate)
}

export const selectRangeDay = ({ range }: RootState): Date | null => {
  const singleDaySelected: boolean = getIfSingleDaySelected(range)
  if (singleDaySelected) return range.minDate
  return null
}

export const selectRange = ({ range }: RootState) => ({ range })

export default rangeSlice.reducer
