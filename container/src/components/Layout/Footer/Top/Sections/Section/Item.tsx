import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Link,
  Theme,
} from '@material-ui/core'

import { NavLink } from '../../types'
import { useNavigatorToLink } from '../../../../../../utils/navigate'

const styles = ({ breakpoints: { up }, typography: { body1 } }: Theme) => {
  const md = up('md')
  return createStyles({
    root: {
      listStyle: 'none',
      '& + &': {
        marginTop: '1.25rem',
      },
    },
    button: {
      ...body1,
      color: 'inherit',
      [md]: {
        fontSize: body1.fontSize,
      },
    },
  })
}

interface Props extends WithStyles<typeof styles>, NavLink {}

const Item = ({ classes, text, href }: Props) => {
  const handleClick = useNavigatorToLink(href)

  return (
    <li className={classes.root}>
      <Link href={href} className={classes.button} onClick={handleClick}>
        {text}
      </Link>
    </li>
  )
}

export default withStyles(styles)(Item)
