import { useDispatch } from 'react-redux'

import fetchCategories from '../actions/lists/categories'

export const useFetchCategories = () => {
  const dispatch = useDispatch()
  return () => dispatch(fetchCategories())
}
