import { sections } from '@supercoder.dev/expense-tracker-common'
import React from 'react'

import Section from '../../components/Section'
import Body from './Body'
import Image from './Image'

export default function Smart() {
  const title = 'Use a smart expense tracker.'
  const description =
    'Use an expense tracker with smart features to help you manage your money:'
  return (
    <Section
      body={<Body title={title} description={description} />}
      childrenDirection="left"
      id={sections.features}
    >
      <Image />
    </Section>
  )
}
