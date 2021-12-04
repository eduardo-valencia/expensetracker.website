import React from 'react'

import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'
import useEditAndInfoState from '../../hooks/editAndInfoState'
import Budget, { BudgetProps } from './Budget'
import EditDialog from './EditDialog'
import BudgetInfoDialog from './InfoDialog'

interface Props extends BudgetProps {}

function BudgetWithDialog(props: Props) {
  const editAndInfoState = useEditAndInfoState()

  return (
    <ItemDialogsContext.Provider value={editAndInfoState}>
      <BudgetInfoDialog budget={props} />
      <EditDialog budget={props} />
      <Budget {...props} />
    </ItemDialogsContext.Provider>
  )
}

export default BudgetWithDialog
