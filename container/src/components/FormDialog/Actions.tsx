import { createStyles, withStyles } from '@material-ui/core'

import Actions from '../itemDialog/Actions'

const styles = () => {
  return createStyles({
    root: {
      justifyContent: 'flex-end',
    },
  })
}

export default withStyles(styles)(Actions)
