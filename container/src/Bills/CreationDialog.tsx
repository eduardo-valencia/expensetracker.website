import React from 'react'

import billRepo from '../repos/bill'
import RecurringRecordCreationDialog from '../components/RecurringRecordCreationDialog'
import { useFetchBills } from '../hooks/bills'

function BillsCreationDialog() {
  const fetchBillsList = useFetchBills()
  return (
    <RecurringRecordCreationDialog
      title="Add Bill"
      formProps={{ submit: billRepo.create, refreshList: fetchBillsList }}
    />
  )
}

export default BillsCreationDialog
