import React from 'react'
import AddItemMsg from '../../components/shared/EmptyList/AddItemMsg'
import SvgPayments from '../../Svgs/Payments'

export default function EmptyList() {
  return <AddItemMsg pluralItem="transactions" Svg={SvgPayments}></AddItemMsg>
}
