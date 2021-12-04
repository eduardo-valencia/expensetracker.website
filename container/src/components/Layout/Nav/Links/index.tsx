import React from 'react'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core'

import Item from './Item'
import { getExpandBreakpoint } from '../styles'
import { links } from '../../../../constants/links'
import { sections } from '@supercoder.dev/expense-tracker-common'

const styles = (theme: Theme) => {
  const expandBreakpoint: string = getExpandBreakpoint(theme)
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 0,
      margin: 0,
      [expandBreakpoint]: {
        flexDirection: 'row',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Links = ({ classes }: Props) => {
  interface SectionLink {
    id: string
    text: string
  }

  const renderSectionLink = ({ id, text }: SectionLink): JSX.Element => {
    const fullLink: string = `/#${id}`
    return (
      <Item href={fullLink} key={id}>
        {text}
      </Item>
    )
  }

  const renderSectionLinks = (): JSX.Element[] => {
    const sectionLinks: SectionLink[] = [
      {
        id: sections.features,
        text: 'Features',
      },
      {
        id: sections.testimonials,
        text: 'Testimonials',
      },
    ]
    return sectionLinks.map(renderSectionLink)
  }

  const renderedSectionLinks: JSX.Element[] = renderSectionLinks()

  return (
    <ul className={classes.root}>
      <Item href={links.home}>Home</Item>
      {renderedSectionLinks}
    </ul>
  )
}

export default withStyles(styles)(Links)
