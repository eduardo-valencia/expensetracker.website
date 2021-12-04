import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import { ImageProps } from '../../Screenshot'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      width: '100%',
    },
  })
}

export interface Props extends WithStyles<typeof styles>, ImageProps {
  src: string
  alt: string
}

const Image = ({ classes, src, ...other }: Props) => {
  return <image {...other} width={1125} height={2436} href={src} />
}

export default withStyles(styles)(Image)
