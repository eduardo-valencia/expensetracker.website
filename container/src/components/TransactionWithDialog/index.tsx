import React from 'react'
import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'

import useEditAndInfoState from '../../hooks/editAndInfoState'
import Transaction, { TransactionProps } from './Transaction'
import EditDialog from './EditDialog'
import InfoDialog from './InfoDialog'

interface Props extends Omit<TransactionProps, 'show'> {}

export default function TransactionWithDialog(props: Props) {
  const editAndInfoState = useEditAndInfoState()
  const { editOpenState } = editAndInfoState

  return (
    <ItemDialogsContext.Provider value={editAndInfoState}>
      <InfoDialog {...props} />
      <EditDialog
        transaction={props}
        isOpen={editOpenState.isOpen}
        close={editOpenState.close}
      />
      <Transaction {...props} />
    </ItemDialogsContext.Provider>
  )
}
