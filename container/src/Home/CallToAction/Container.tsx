import { withStyles, createStyles, Theme } from '@material-ui/core'
import Container from '../../components/Section/Container'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      [up('xl')]: {
        padding: 0,
        position: 'relative',
      },
    },
  })
}

export default withStyles(styles)(Container)
