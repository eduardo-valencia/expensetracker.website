import { withStyles, createStyles } from '@material-ui/core'

import Footer from '../Layout/Footer'

const styles = () => {
  return createStyles({
    root: {
      marginTop: 0,
    },
  })
}

export default withStyles(styles)(Footer)
