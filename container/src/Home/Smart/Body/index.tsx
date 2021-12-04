import React from 'react'

import Features from './Features'
import BaseBody, { BodyInfo } from '../../../components/Section/Body'

interface Props extends BodyInfo {}

const Body = (props: Props) => {
  return (
    <BaseBody maxWidthLg="28.375rem" {...props}>
      <Features />
    </BaseBody>
  )
}

export default Body
