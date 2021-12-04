import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
  TypographyProps,
} from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      marginBottom: '1.4375rem',
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<TypographyProps, 'classes'> {}

const Title = (props: Props) => {
  return <Typography variant="h2" {...props} />
}

export default withStyles(styles)(Title)
