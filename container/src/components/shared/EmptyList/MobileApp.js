import React from 'react'
import AddItemMsg from './AddItemMsg'
import SvgMobileApp from './MobileAppSvg'

export default function MobileApp(props) {
  return <AddItemMsg {...props} Svg={SvgMobileApp}></AddItemMsg>
}
