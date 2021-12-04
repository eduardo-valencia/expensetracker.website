import React, { useContext } from 'react'

import {
  EditableTransactionFields,
  editTransaction,
  TransactionResponse,
} from '../../api/transactions'
import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'
import ITransaction from '../../types/Transaction'
import EditButton from '../editDialog/EditButton'
import FormDialog, { FormDialogProps } from '../FormDialog'
import Hero from '../FormDialog/Hero'
import TransactionsForm from './TransactionsForm'

interface Props extends Omit<FormDialogProps, 'children'> {
  transaction: ITransaction
}

function EditDialog({ transaction, ...other }: Props) {
  const transactionDate: Date = new Date(transaction.date)
  const {
    editOpenState: { close },
  } = useContext(ItemDialogsContext)

  const submit = (
    values: EditableTransactionFields
  ): Promise<TransactionResponse> => {
    return editTransaction(transaction._id, values)
  }

  const title: string = 'Edit transaction'

  return (
    <FormDialog {...other} PaperProps={{ 'aria-label': title }}>
      <Hero title={title} />
      <TransactionsForm
        close={close}
        submit={submit}
        initialValues={{ ...transaction, date: transactionDate }}
        submitButton={<EditButton />}
      />
    </FormDialog>
  )
}

export default EditDialog
