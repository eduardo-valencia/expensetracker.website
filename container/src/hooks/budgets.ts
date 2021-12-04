import { useDispatch } from 'react-redux'

import fetchBudgets from '../actions/lists/budgets'

export const useFetchBudgets = () => {
  const dispatch = useDispatch()
  return () => dispatch(fetchBudgets())
}
