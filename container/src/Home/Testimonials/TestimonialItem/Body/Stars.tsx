import { Theme, withStyles, createStyles } from '@material-ui/core'
import Stars from '../../../../components/Stars'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginBottom: '2.4375rem',
      [up('md')]: {
        marginBottom: '2.6875rem',
      },
    },
  })
}

export default withStyles(styles)(Stars)
