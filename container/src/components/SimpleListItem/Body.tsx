import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'

const styles = () => {
  return createStyles({
    title: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  title: string
  children?: React.ReactNode
}

const SimpleListItemBody = ({ classes, title, children = null }: Props) => {
  return (
    <div>
      <Typography className={classes.title} component="h3">
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default withStyles(styles)(SimpleListItemBody)
