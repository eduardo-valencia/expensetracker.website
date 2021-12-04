import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Container as BaseContainer,
  Theme,
  ContainerProps,
} from '@material-ui/core'

import { flexBreakpoint } from './styles'
import { ContainerProps as BaseContainerProps } from './types'

const getFlexDirection = (props: BaseContainerProps): string =>
  props.childrenDirection === 'right' ? 'row-reverse' : 'row'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column-reverse',
      [up(flexBreakpoint)]: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: getFlexDirection,
      },
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<ContainerProps, 'classes'>,
    Omit<BaseContainerProps, 'children'> {}

const Container = ({ childrenDirection, ...other }: Props) => {
  return <BaseContainer {...other} />
}

export default withStyles(styles)(Container)
