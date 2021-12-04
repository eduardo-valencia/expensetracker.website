import { createStyles, withStyles } from '@material-ui/core'

import ToggleNav from '../../ToggleNav'

const styles = () => {
  return createStyles({
    root: {
      marginLeft: '1.25rem',
    },
  })
}

export default withStyles(styles)(ToggleNav)
