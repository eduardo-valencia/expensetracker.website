import React from 'react'

import IBill from '../../types/Bill'
import billRepo from '../../repos/bill'
import RecurringRecordEditDialog from '../RecurringRecordEditDialog'
import { useFetchBills } from '../../hooks/bills'

interface Props {
  bill: IBill
}

function EditDialog({ bill }: Props) {
  const fetchBills = useFetchBills()
  return (
    <RecurringRecordEditDialog
      itemInfo={bill}
      edit={billRepo.edit}
      title="Edit Bill"
      form={{ refreshList: fetchBills }}
    />
  )
}

export default EditDialog
