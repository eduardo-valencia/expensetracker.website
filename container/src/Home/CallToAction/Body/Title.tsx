import { withStyles, createStyles } from '@material-ui/core'

import Title from '../../../components/Section/Body/Title'

const styles = () => {
  return createStyles({
    root: {
      color: 'white',
    },
  })
}

export default withStyles(styles)(Title)
