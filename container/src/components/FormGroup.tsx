import { withStyles, createStyles, Box } from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '0.9375rem',
    },
  })
}

export const addFormGroupStyles = withStyles(styles)

export default addFormGroupStyles(Box)
