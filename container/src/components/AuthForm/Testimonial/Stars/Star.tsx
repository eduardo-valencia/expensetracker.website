import { withStyles, createStyles, Theme } from '@material-ui/core'

import Star from '../../../Stars/Item'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      '& + &': {
        marginLeft: '0.375rem',
        [up('md')]: {
          marginLeft: '0.5rem',
        },
      },
    },
  })
}

export default withStyles(styles)(Star)
