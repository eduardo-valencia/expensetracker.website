import { Typography, TypographyProps } from '@material-ui/core'
import React from 'react'

export default function BottomText(props: TypographyProps) {
  return <Typography variant="body2" color="textSecondary" {...props} />
}
