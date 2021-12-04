import React from 'react'

import RecurringRecordList from '../../components/shared/RecurringRecords/List'
import ListPage from '../../components/shared/ListPage'
import ListError from '../../components/shared/Errors/List'
import EmptyList from '../EmptyList'
import BudgetWithDialog from '../../components/BudgetWithDialog'
import BudgetsCreationDialog from '../CreationDialog'

export default function BudgetsList() {
  return (
    <ListPage title="Budgets" routeId="budgets">
      <ListError>
        <RecurringRecordList
          recordLabel="Budget"
          apiRouteId="budgets"
          routeId="budgets"
          editRouteWithoutId="budgets/edit"
          placeholder={<EmptyList />}
          Item={BudgetWithDialog}
        />
        <BudgetsCreationDialog />
      </ListError>
    </ListPage>
  )
}
