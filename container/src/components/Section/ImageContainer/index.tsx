import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import Ellipse, { EllipseStyles } from './Ellipse'

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode
  ellipses: EllipseStyles[]
}

const ImageContainer = ({ classes, children, ellipses }: Props) => {
  const renderEllipse = (styles: EllipseStyles, index: number): JSX.Element => {
    return <Ellipse {...styles} key={index} />
  }

  const renderedEllipses: JSX.Element[] = ellipses.map(renderEllipse)

  return (
    <div className={classes.root}>
      {children}
      {renderedEllipses}
    </div>
  )
}

export default withStyles(styles)(ImageContainer)
