import React from 'react'
import { withStyles, WithStyles, createStyles, Link } from '@material-ui/core'

import { links } from '../constants/links'
import { useNavigatorToLink } from '../utils/navigate'

const styles = () => {
  return createStyles({
    root: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.3125rem',
      letterSpacing: '-0.0625rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Logo = ({ classes }: Props) => {
  const navigate = useNavigatorToLink(links.home)
  return (
    <Link
      color="textPrimary"
      className={classes.root}
      href={links.home}
      onClick={navigate}
    >
      expense tracker
    </Link>
  )
}

export default withStyles(styles)(Logo)
