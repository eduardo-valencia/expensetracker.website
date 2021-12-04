import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IBudget from '../../types/Budget'
import type RootState from '../../types/RootState'

export type BudgetFilterState = IBudget['_id'] | null

const initialState: BudgetFilterState = null

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setBudget: (
      state: BudgetFilterState,
      action: PayloadAction<IBudget['_id']>
    ) => {
      state = action.payload
    },
  },
})

export const { setBudget } = budgetSlice.actions

export const selectBudget = (state: RootState) => state.budgetFilter

export default budgetSlice.reducer
