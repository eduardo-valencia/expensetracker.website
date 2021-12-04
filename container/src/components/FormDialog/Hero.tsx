import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: { marginBottom: '2.5rem' },
  })
}

interface Props extends WithStyles<typeof styles> {
  title: string
}

const Hero = ({ classes, title }: Props) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">{title}</Typography>
    </div>
  )
}

export default withStyles(styles)(Hero)
