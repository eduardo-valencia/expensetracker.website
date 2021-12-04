import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Hidden,
  Theme,
} from '@material-ui/core'
import { Palette } from '@material-ui/core/styles/createPalette'

import BaseEllipse from './ellipse.svg'

export interface EllipseStyles {
  top?: string
  bottom?: string
  left?: string
  right?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color: keyof Palette['ellipses']
}

const getSize = (props: EllipseStyles): string => {
  switch (props.size) {
    case 'sm':
      return '0.375rem'
    case 'md':
      return '0.9375rem'
    case 'lg':
      return '1.25rem'
    default:
      return '2.1875rem'
  }
}

const getFill =
  (ellipses: Palette['ellipses']) =>
  ({ color }: EllipseStyles): string => {
    return ellipses[color]
  }

const styles = ({ palette: { ellipses } }: Theme) => {
  return createStyles({
    root: {
      position: 'absolute',
      width: getSize,
      height: getSize,
      fill: getFill(ellipses),
    },
  })
}

interface Props extends WithStyles<typeof styles>, EllipseStyles {}

const Ellipse = ({ classes, size, ...styles }: Props) => {
  return (
    <Hidden lgDown>
      <BaseEllipse className={classes.root} style={styles} />
    </Hidden>
  )
}

export default withStyles(styles)(Ellipse)
