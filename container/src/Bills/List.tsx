import React, { Component } from 'react'

import RecurringRecordList from '../components/shared/RecurringRecords/List'
import ListPage from '../components/shared/ListPage'
import ListError from '../components/shared/Errors/List'
import EmptyList from './EmptyList'
import BillWithDialog from '../components/BillWithDialog'
import CreationDialog from './CreationDialog'

export default class BillsList extends Component {
  render() {
    const routeId = 'bills'
    return (
      <ListPage>
        <ListError>
          <RecurringRecordList
            recordLabel="Bill"
            routeId={routeId}
            placeholder={<EmptyList />}
            Item={BillWithDialog}
          />
          <CreationDialog />
        </ListError>
      </ListPage>
    )
  }
}
