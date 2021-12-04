import { withStyles, createStyles, Theme } from '@material-ui/core'

import SignUpButton from '../../SignUpButton'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      display: 'none',
      [up('md')]: {
        display: 'block',
        marginLeft: '2.6875rem',
      },
    },
  })
}

export default withStyles(styles)(SignUpButton)
