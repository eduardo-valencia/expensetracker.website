import React from 'react'
import { useSetRange } from '../../hooks/range'
import { useAppSelector } from '../../hooks/selector'
import { selectRange } from '../../reducers/ranges/range'
import RangeSelector from '../../components/RangeSelector'

function DateFilter() {
  const { range } = useAppSelector(selectRange)
  const setRange = useSetRange()

  return <RangeSelector setRange={setRange} range={range} />
}

export default DateFilter
