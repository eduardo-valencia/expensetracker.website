import React, { useContext } from 'react'

import { createTransaction } from '../api/transactions'
import { CreationDialogContext } from '../contexts/CreationDialogContext'
import CreationDialog from '../components/CreationDialog'
import CreateButton from '../components/CreationDialog/CreateButton'
import Hero from '../components/FormDialog/Hero'
import TransactionsForm from '../components/TransactionWithDialog/TransactionsForm'

function TransactionsCreationDialog() {
  const { close } = useContext(CreationDialogContext)

  const title: string = 'Add transaction'

  return (
    <CreationDialog PaperProps={{ 'aria-label': title }}>
      <Hero title={title} />
      <TransactionsForm
        close={close}
        submit={createTransaction}
        submitButton={<CreateButton />}
        initialValues={{
          date: new Date(),
          category: '',
          budget: '',
          type: 'expense',
        }}
      />
    </CreationDialog>
  )
}

export default TransactionsCreationDialog
