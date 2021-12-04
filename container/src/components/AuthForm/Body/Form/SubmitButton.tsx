import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Button,
  Theme,
} from '@material-ui/core'
import { getPaddingY } from '../../../../utils/styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      padding: '0.75rem',
      fontSize: '1rem',
      lineHeight: '1.3125rem',
      width: '100%',
      ...getPaddingY('1.25rem'),
      [up('md')]: {
        maxWidth: '17.625rem',
      },
      [up('xl')]: {
        maxWidth: '100%',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const SubmitButton = ({ classes, children }: Props) => {
  return (
    <Button type="submit" color="primary" variant="contained" classes={classes}>
      {children}
    </Button>
  )
}

export default withStyles(styles)(SubmitButton)
