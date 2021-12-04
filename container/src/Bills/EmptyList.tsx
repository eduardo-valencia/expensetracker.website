import React from 'react'

import SvgCalendar from '../Svgs/Calendar'
import AddItemMsg from '../components/shared/EmptyList/AddItemMsg'

export default function EmptyList() {
  return <AddItemMsg pluralItem="bills" Svg={SvgCalendar}></AddItemMsg>
}
