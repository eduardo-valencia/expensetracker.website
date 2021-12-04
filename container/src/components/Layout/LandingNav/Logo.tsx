import { withStyles, createStyles, Theme } from '@material-ui/core'

import Logo from '../../Logo'

const styles = ({ breakpoints: { up } }: Theme) => {
  const md = up('md')
  return createStyles({
    root: {
      [md]: {
        fontSize: '1.75rem',
        lineHeight: '2.25rem',
      },
    },
  })
}

export default withStyles(styles)(Logo)
