import { useDispatch } from 'react-redux'

import fetchBills from '../actions/lists/bills'

export const useFetchBills = () => {
  const dispatch = useDispatch()
  return () => dispatch(fetchBills())
}
