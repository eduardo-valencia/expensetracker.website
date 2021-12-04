import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import BaseContainer from './Container'
import { ContainerProps } from './types'

interface BaseProps {
  childrenDirection?: ContainerProps['childrenDirection']
  children: React.ReactNode
  body: React.ReactNode
  Container?: React.FunctionComponent<ContainerProps> | typeof BaseContainer
  id?: string
}

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginBottom: '6rem',
      [up('xl')]: {
        marginBottom: '9rem',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles>, BaseProps {}

const Section = ({
  classes,
  children,
  Container = BaseContainer,
  body = null,
  childrenDirection,
  id,
}: Props) => {
  return (
    <section className={classes.root} id={id}>
      <Container childrenDirection={childrenDirection}>
        {children}
        {body}
      </Container>
    </section>
  )
}

export { default as BaseContainer } from './Container'
export { default as BaseBody } from './Body'

export default withStyles(styles)(Section)
