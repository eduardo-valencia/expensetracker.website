import React from 'react'
import {
  Typography,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

import Item from './Item'
import { expandLinksBreakpoint, showSingleRowBreakpoint } from '../../styles'
import { NavLink, Section } from '../../types'

interface BaseProps extends Section {
  sections: number
  index: number
}

const columnsPerRow: number = 3

// Should only be used when using multiple rows
const getMarginBottom =
  (margin: string) =>
  ({ sections, index }: BaseProps) => {
    const position: number = index + 1
    const columnsRemainder: number = sections % columnsPerRow
    const bottomRowColumns: number =
      columnsRemainder === 0 ? columnsPerRow : columnsRemainder
    const firstBottomRowPosition: number = sections - bottomRowColumns
    return position < firstBottomRowPosition ? margin : 0
  }

const getMarginLeft =
  (margin: string) =>
  ({ index }: BaseProps): string | number => {
    const isFirstInRow: boolean = index % columnsPerRow === 0
    return isFirstInRow ? 0 : margin
  }

const styles = ({ breakpoints: { up } }: Theme) => {
  const expandLinkUp = up(expandLinksBreakpoint)
  const showSingleRowUp = up(showSingleRowBreakpoint)
  const marginLeftMd = '4.25rem'
  return createStyles({
    root: {
      marginBottom: '2.5rem',
      [expandLinkUp]: {
        marginBottom: getMarginBottom('4.5rem'),
        marginLeft: getMarginLeft(marginLeftMd),
        flexBasis: `calc(100% / ${columnsPerRow} - ${marginLeftMd})`,
      },
      [showSingleRowUp]: {
        marginBottom: 0,
        flexShrink: 0,
      },
      '& + &': {
        [showSingleRowUp]: {
          marginLeft: '6.25rem',
        },
      },
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
    links: {
      padding: 0,
    },
    title: {
      marginBottom: '1.5625rem',
      [expandLinkUp]: {
        marginBottom: '2.5rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles>, BaseProps {}

const SectionItem = ({ classes, title, links }: Props) => {
  const renderLink = (link: NavLink, index: number): JSX.Element => {
    return <Item {...link} key={index} />
  }

  const renderedLinks: JSX.Element[] = links.map(renderLink)

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6" component="h2">
        {title}
      </Typography>
      <ul className={classes.links}>{renderedLinks}</ul>
    </div>
  )
}

export default withStyles(styles)(SectionItem)
