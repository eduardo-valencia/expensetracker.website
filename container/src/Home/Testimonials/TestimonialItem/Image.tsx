import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import { Author, Testimonial } from '../types'
import { getMarginX } from '../../../utils/styles'
import { flexBreakpoint } from './styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  const marginRight = '4.875rem'
  return createStyles({
    root: {
      borderRadius: '1.6875rem 1.6875rem 5.875rem 1.6875rem',
      width: '100%',
      marginBottom: '3.25rem',
      display: 'block',
      maxWidth: '26.9375rem',
      ...getMarginX('auto'),
      [up(flexBreakpoint)]: {
        width: '31.5625rem',
        maxWidth: '100%',
        marginRight: marginRight,
        height: '37.875rem',
        objectFit: 'cover',
        flexShrink: 0,
        marginBottom: 0,
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  image: Testimonial['image']
  name: Author['name']
}

const Image = ({ classes, image, name }: Props) => {
  return <img src={image} className={classes.root} alt={name} />
}

export default withStyles(styles)(Image)
