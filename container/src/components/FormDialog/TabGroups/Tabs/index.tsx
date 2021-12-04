import React from 'react'
import {
  Tabs as BaseTabs,
  withStyles,
  WithStyles,
  createStyles,
  TabsProps as BaseTabsProps,
} from '@material-ui/core'

import { ITabGroup } from '../types'
import Tab from './Tab'

const styles = () => {
  return createStyles({
    root: {
      borderBottom: '0.0625rem solid #D9DCE3',
    },
  })
}

export interface TabsProps
  extends WithStyles<typeof styles>,
    Omit<BaseTabsProps<any>, 'classes' | 'children'> {
  groups: ITabGroup[]
}

const Tabs = ({ groups, ...other }: TabsProps) => {
  const renderTab = (group: ITabGroup, index: number): JSX.Element => {
    return <Tab {...group} key={index} index={index} />
  }

  const renderedTabs: JSX.Element[] = groups.map(renderTab)

  return (
    <BaseTabs indicatorColor="primary" {...other}>
      {renderedTabs}
    </BaseTabs>
  )
}

export default withStyles(styles)(Tabs)
