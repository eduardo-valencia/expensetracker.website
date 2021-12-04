import { useDispatch } from 'react-redux'

import { setRange } from '../reducers/ranges/range'
import { Range } from '../types/RootState'

export const useSetRange = () => {
  const dispatch = useDispatch()
  return (range: Range) => dispatch(setRange(range))
}
