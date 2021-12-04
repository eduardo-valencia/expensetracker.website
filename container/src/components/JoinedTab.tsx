/**
 * A tab that is part of a tab group.
 * The first and last items only have outside border radiuses.
 */

import { withStyles, createStyles } from '@material-ui/core'

import SimpleTab from './SimpleTab'

const styles = () => {
  return createStyles({
    root: {
      '& + &': {
        marginLeft: 0,
      },
      '&:first-of-type': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      '&:last-of-type': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
  })
}

export default withStyles(styles)(SimpleTab)
