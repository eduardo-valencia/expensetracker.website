import React from 'react'
import {
  createStyles,
  withStyles,
  WithStyles,
  Tab as BaseTab,
  TabProps as BaseTabProps,
} from '@material-ui/core'

import { getTabGroupId, getTabId } from '../../../../utils/tabs'
import { ITabGroup } from '../types'

const styles = () => {
  return createStyles({
    root: {
      fontWeight: 500,
      color: '#111111',
    },
  })
}

interface Props
  extends ITabGroup,
    Omit<BaseTabProps, 'id' | 'title' | 'classes'>,
    WithStyles<typeof styles> {
  index: number
}

function Tab({ title, index, ...other }: Props) {
  return (
    <BaseTab
      id={getTabId(index)}
      aria-controls={getTabGroupId(index)}
      label={title}
      {...other}
    />
  )
}

export default withStyles(styles)(Tab)
