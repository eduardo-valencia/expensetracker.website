import React, { useContext } from 'react'
import {
  createStyles,
  withStyles,
  WithStyles,
  Link,
  Theme,
} from '@material-ui/core'

import { expandBreakpoint } from '../styles'
import { useNavigatorToLink } from '../../../../utils/navigate'
import { NavContext } from '../../../../contexts/NavContext'

const styles = ({
  breakpoints: { up },
  palette: {
    text: { primary },
  },
}: Theme) => {
  const expandBreakpointUp = up(expandBreakpoint)
  return createStyles({
    root: {
      listStyle: 'none',
      [expandBreakpointUp]: {
        '& + &': {
          marginLeft: '2.9375rem',
        },
      },
    },
    link: {
      minWidth: '6.25rem',
      textAlign: 'left',
      padding: '1rem 0',
      justifyContent: 'flex-start',
      display: 'block',
      color: primary,
      textDecoration: 'none',
      [expandBreakpointUp]: {
        lineHeight: '1.125rem',
        padding: 0,
        minWidth: 0,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: 700,
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  href: string
  children: React.ReactNode
}

function Item({ classes, href, children }: Props) {
  const { closeDrawer } = useContext(NavContext)
  const navigate = useNavigatorToLink(href)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    navigate(event)
    closeDrawer()
  }

  return (
    <li className={classes.root}>
      <Link className={classes.link} href={href} onClick={handleClick}>
        {children}
      </Link>
    </li>
  )
}

export default withStyles(styles)(Item)
