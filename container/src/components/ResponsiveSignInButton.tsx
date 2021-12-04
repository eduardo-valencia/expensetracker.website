import { withStyles, createStyles, Theme } from '@material-ui/core'

import SignUpButton from './SignUpButton'

const styles = ({ breakpoints: { up }, overrides }: Theme) => {
  const sizeLarge = overrides!.MuiButton!.sizeLarge!
  return createStyles({
    root: {
      [up('md')]: {
        ...sizeLarge,
      },
    },
  })
}

export default withStyles(styles)(SignUpButton)
