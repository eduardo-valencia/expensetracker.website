import React from 'react'

import TabGroups from '../FormDialog/TabGroups'
import BasicInfo from './BasicInfo'
import MoreDetails from './MoreDetails'

function TransactionsTabGroups() {
  return (
    <TabGroups
      groups={[
        { title: 'Basic info', content: <BasicInfo /> },
        { title: 'More details', content: <MoreDetails /> },
      ]}
    />
  )
}

export default TransactionsTabGroups
