import { withStyles, createStyles, Theme } from '@material-ui/core'

import Logo from '../Logo'

const styles = ({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  return createStyles({
    root: {
      [md]: {
        fontSize: 'auto',
        lineHeight: 'auto',
      },
    },
  })
}

export default withStyles(styles)(Logo)
