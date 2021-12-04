import { withStyles, createStyles } from '@material-ui/core'
import { getSize } from '../../../../utils/styles'
import Icon from '../../../Author/Icon'

const styles = () => {
  return createStyles({
    root: {
      width: 'auto',
      boxShadow: 'none',
    },
    icon: {
      ...getSize('3.75rem'),
      borderRadius: '50%',
    },
  })
}

export default withStyles(styles)(Icon)
