import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import Item from './Section'
import { expandLinksBreakpoint, showSingleRowBreakpoint } from '../styles'
import { Section } from '../types'
import { links } from '../../../../../constants/links'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      width: '100%',
      [up(expandLinksBreakpoint)]: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      [up(showSingleRowBreakpoint)]: {
        flexWrap: 'nowrap',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Sections = ({ classes }: Props) => {
  const sections: Section[] = [
    {
      title: 'App',
      links: [
        {
          text: 'Transactions',
          href: links.transactions,
        },
        {
          text: 'Budgets',
          href: links.budgets,
        },
        {
          text: 'Categories',
          href: links.categories,
        },
        {
          text: 'Statistics',
          href: links.statistics,
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          text: 'About',
          href: 'https://supercoder.dev/resume',
        },
        {
          text: 'Custom Web Apps',
          href: 'https://supercoder.dev/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          text: 'Contact',
          href: 'https://supercoder.dev/#contact',
        },
      ],
    },
  ]

  const renderSection = (section: Section, index: number): JSX.Element => {
    return (
      <Item {...section} key={index} sections={sections.length} index={index} />
    )
  }

  const renderedSections: JSX.Element[] = sections.map(renderSection)

  return <div className={classes.root}>{renderedSections}</div>
}

export default withStyles(styles)(Sections)
