import React from 'react'

import fetchBillsList from '../../actions/lists/bills'
import { apiSubRoutes } from '../../constants/links'
import IBill from '../../types/Bill'
import RecurringRecordInfoDialog from '../RecurringRecordInfoDialog'

interface Props {
  bill: IBill
}

function BillInfoDialog({ bill }: Props) {
  return (
    <RecurringRecordInfoDialog
      itemInfo={bill}
      apiRouteId={apiSubRoutes.bills}
      createRefreshListAction={fetchBillsList}
    />
  )
}

export default BillInfoDialog
