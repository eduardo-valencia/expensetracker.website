import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import MutedOutlinedButton from '../components/MutedOutlinedButton'
import SectionToolbar from './SectionToolbar'
import Section from './Section'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {
  title: string
  href: string
  children: React.ReactNode
}

const ListSection = ({ title, href, children }: Props) => {
  return (
    <Section>
      <SectionToolbar title={title}>
        <MutedOutlinedButton href={href}>View All</MutedOutlinedButton>
      </SectionToolbar>
      {children}
    </Section>
  )
}

export default withStyles(styles)(ListSection)
