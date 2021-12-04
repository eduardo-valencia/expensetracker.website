import { createStyles, withStyles } from '@material-ui/styles'

import Icon from '../../../../../components/Author/Icon'

const styles = () => {
  return createStyles({
    root: {
      backgroundColor: 'white',
    },
  })
}

export default withStyles(styles)(Icon)
