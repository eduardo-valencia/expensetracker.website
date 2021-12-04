import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  ListItemIcon,
  ListItemText,
  Theme,
  ListItem,
  Button,
} from '@material-ui/core'
import { useRouter } from 'next/router'

import { useNavigatorToLink } from '../../../utils/navigate'
import classNames from 'classnames'
import { NavContext } from '../../../contexts/NavContext'

const styles = ({
  palette: {
    primary: { main: primary },
  },
  typography: { buttonSm },
}: Theme) => {
  return createStyles({
    root: {
      padding: 0,
      marginTop: '0.5rem',
    },
    button: {
      padding: '0.9375rem 0.875rem',
      borderRadius: '0.625rem',
      width: '100%',
    },
    selected: {
      color: primary,
      backgroundColor: '#F7F7F7',
    },
    icon: {
      color: '#A9ABBD',
      minWidth: '2.5rem',
    },
    iconSelected: {
      color: primary,
    },
    text: {
      ...buttonSm,
    },
  })
}

export interface ItemProps extends WithStyles<typeof styles> {
  icon: React.ReactNode
  text: string
  href: string
}

const getItem = (closeOnClick: boolean) => {
  const Item = ({ classes, icon, text, href }: ItemProps) => {
    const navigate = useNavigatorToLink(href)
    const { pathname } = useRouter()
    const { closeDrawer } = useContext(NavContext)

    const getIfIsSelected = (): boolean => {
      const hrefMatch: RegExpMatchArray | null = pathname.match(href)
      return !!hrefMatch
    }

    const isSelected: boolean = getIfIsSelected()

    const buttonClass: string = classNames(classes.button, {
      [classes.selected]: isSelected,
    })
    const iconClass: string = classNames(classes.icon, {
      [classes.iconSelected]: isSelected,
    })

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
      if (closeOnClick) {
        closeDrawer()
      }
      navigate(event)
    }

    return (
      <ListItem className={classes.root}>
        <Button href={href} onClick={handleClick} className={buttonClass}>
          <ListItemIcon className={iconClass}>{icon}</ListItemIcon>
          <ListItemText classes={{ primary: classes.text }}>
            {text}
          </ListItemText>
        </Button>
      </ListItem>
    )
  }

  return withStyles(styles)(Item)
}

export default getItem
