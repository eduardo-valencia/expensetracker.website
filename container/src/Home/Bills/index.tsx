import React from 'react'

import Section from '../../components/Section'
import Body from './Body'
import Image from './Image'

export default function Bills() {
  return (
    <Section body={<Body />} childrenDirection="right">
      <Image />
    </Section>
  )
}
