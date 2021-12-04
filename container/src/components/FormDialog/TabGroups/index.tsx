import React, { useState } from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import _ from 'lodash'

import Tabs, { TabsProps } from './Tabs'
import { ITabGroup } from './types'
import { getTabGroupId, getTabId } from '../../../utils/tabs'

const styles = () => {
  return createStyles({
    content: {
      margin: '2.1875rem 0',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  groups: ITabGroup[]
}

const TabGroups = ({ classes, groups }: Props) => {
  const [selectedTabId, setSelectedTab] = useState<number>(0)

  const renderContent = (): React.ReactNode => {
    const selectedTab: ITabGroup = groups[selectedTabId]
    return (
      <div
        className={classes.content}
        id={getTabGroupId(selectedTabId)}
        aria-labelledby={getTabId(selectedTabId)}
      >
        {selectedTab.content}
      </div>
    )
  }

  const handleChange: TabsProps['onChange'] = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setSelectedTab(newValue)
  }

  const renderedContent: React.ReactNode = renderContent()

  return (
    <>
      <Tabs
        groups={groups}
        onChange={handleChange}
        value={selectedTabId}
        aria-label="Form navigation"
      />
      {renderedContent}
    </>
  )
}

export default withStyles(styles)(TabGroups)
