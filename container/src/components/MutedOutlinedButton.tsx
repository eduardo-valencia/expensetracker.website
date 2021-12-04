import React from 'react'
import {
  withStyles,
  createStyles,
  Theme,
  Button,
  ButtonProps,
} from '@material-ui/core'

const styles = ({
  palette: {
    divider,
    text: { secondary },
  },
}: Theme) => {
  return createStyles({
    root: {
      border: `0.0625rem solid ${divider}`,
      color: secondary,
      borderRadius: '0.3125rem',
    },
    endIcon: {},
  })
}

interface Props extends ButtonProps {}

const MutedOutlinedButton = (props: Props) => {
  return <Button {...props} variant="outlined" />
}

export default withStyles(styles)(MutedOutlinedButton)
