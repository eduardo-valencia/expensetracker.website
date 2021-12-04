import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Typography,
} from '@material-ui/core'
import { getSize } from '../../utils/styles'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2.1875rem',
    },
    icon: {
      ...getSize('3.6875rem'),
      marginLeft: '1rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  title: string
  bottom?: React.ReactNode
  icon?: string
}

const Hero = ({ classes, title, bottom = null, icon }: Props) => {
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1">{title}</Typography>
        {bottom}
      </div>
      {icon && <img className={classes.icon} alt={title} src={icon} />}
    </div>
  )
}

export default withStyles(styles)(Hero)
