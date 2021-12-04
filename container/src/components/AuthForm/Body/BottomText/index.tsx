import React from 'react'
import {
  Link,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

import Text, { textStyles } from './Text'
import { useNavigatorToLink } from '../../../../utils/navigate'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      textAlign: 'center',
      [up('md')]: {
        textAlign: 'left',
      },
      [up('xl')]: {
        textAlign: 'center',
      },
    },
    link: {
      ...textStyles,
      fontWeight: 700,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  startText: string
  linkText: string
  href: string
}

const BottomText = ({ classes, startText, linkText, href }: Props) => {
  const navigate = useNavigatorToLink(href)
  return (
    <p className={classes.root}>
      <Text color="textSecondary">{startText}</Text>{' '}
      <Link
        color="primary"
        href={href}
        className={classes.link}
        onClick={navigate}
      >
        {linkText}
      </Link>
    </p>
  )
}

export default withStyles(styles)(BottomText)
