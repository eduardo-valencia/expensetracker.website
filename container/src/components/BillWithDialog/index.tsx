import React from 'react'

import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'
import useEditAndInfoState from '../../hooks/editAndInfoState'
import Bill, { BillProps } from './Bill'
import EditDialog from './EditDialog'
import BillInfoDialog from './InfoDialog'

interface Props extends BillProps {}

function BillWithDialog(props: Props) {
  const editAndInfoState = useEditAndInfoState()

  return (
    <ItemDialogsContext.Provider value={editAndInfoState}>
      <BillInfoDialog bill={props} />
      <EditDialog bill={props} />
      <Bill {...props} />
    </ItemDialogsContext.Provider>
  )
}

export default BillWithDialog
