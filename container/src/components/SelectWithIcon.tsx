import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Select,
  SelectProps,
} from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'

const styles = () => {
  return createStyles({
    root: {},
  })
}

export interface SelectWithIconProps
  extends Omit<SelectProps, 'classes'>,
    WithStyles<typeof styles> {}

const SelectWithIcon = (props: SelectWithIconProps) => {
  return (
    <Select variant="outlined" IconComponent={KeyboardArrowDown} {...props} />
  )
}

export default withStyles(styles)(SelectWithIcon)
