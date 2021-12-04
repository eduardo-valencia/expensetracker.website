import { withStyles, createStyles, Theme } from '@material-ui/core'

import Links from './Links'
import { getExpandBreakpoint } from './styles'

const styles = (theme: Theme) => {
  const expandBreakpoint: string = getExpandBreakpoint(theme)
  return createStyles({
    root: {
      display: 'none',
      [expandBreakpoint]: {
        marginLeft: 'auto',
        display: 'flex',
      },
    },
  })
}

export default withStyles(styles)(Links)
