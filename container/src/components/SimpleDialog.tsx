import { withStyles, createStyles, Dialog, Theme } from '@material-ui/core'

export type { DialogProps as SimpleDialogProps } from '@material-ui/core'

const styles = ({ shadows }: Theme) => {
  return createStyles({
    root: {
      boxShadow: shadows[1],
    },
    paper: {
      minWidth: '19.75rem',
    },
  })
}

export default withStyles(styles)(Dialog)
