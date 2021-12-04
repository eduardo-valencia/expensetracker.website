import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import BaseTitle from './Title'
import Description from './Description'
import { flexBreakpoint } from '../styles'

export interface BodyInfo {
  title: string | React.ReactNode
  description?: string
  Title?: typeof BaseTitle
}

export interface BaseProps extends BodyInfo {
  maxWidthLg: string
  children?: React.ReactNode
}

const gettMaxWidth = ({ maxWidthLg }: BaseProps): string => maxWidthLg

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginBottom: '3.3125rem',
      [up(flexBreakpoint)]: {
        maxWidth: gettMaxWidth,
      },
    },
    titleAndDescription: {
      marginBottom: '1.75rem',
    },
  })
}

interface Props extends WithStyles<typeof styles>, BaseProps {}

const Body = ({
  classes,
  title,
  description,
  children,
  Title = BaseTitle,
}: Props) => {
  return (
    <div className={classes.root}>
      <div className={classes.titleAndDescription}>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </div>
      {children}
    </div>
  )
}

export default withStyles(styles)(Body)
