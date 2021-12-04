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
    primary: { main },
    action: { disabled },
  },
}: Theme) => {
  return createStyles({
    root: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.3125rem',
      letterSpacing: '-0.0331rem',
      paddingBottom: '0.625rem',
      borderBottom: `0.125rem solid ${main}`,
      borderRadius: 0,
    },
    disabled: {
      borderColor: disabled,
    },
  })
}

interface Props extends ButtonProps {}

const UnderlinedButton = ({ classes, ...other }: Props) => {
  return <Button color="primary" classes={classes} {...other} />
}

export default withStyles(styles)(UnderlinedButton)
