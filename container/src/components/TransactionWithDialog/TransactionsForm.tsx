import React, { useContext } from 'react'

import { EditableTransactionFields } from '../../api/transactions'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { EditOrInfoFormProps } from '../../types/form'
import ITransaction from '../../types/Transaction'
import FormValidator from '../../utils/form/FormValidator'
import getItemForm from '../ItemForm'
import TransactionsTabGroups from '../transactionsFormDialog/TabGroups'

interface Props
  extends EditOrInfoFormProps<EditableTransactionFields, ITransaction> {}

const ItemForm = getItemForm<EditableTransactionFields>()

function TransactionsForm({ submit, ...other }: Props) {
  const { fetchTransactions } = useContext(TransactionsContext)!

  const formValidator = new FormValidator<EditableTransactionFields>()
  const validate = formValidator.getValidator(['amount', 'name'])

  return (
    <ItemForm
      submit={submit}
      validate={validate}
      updateList={fetchTransactions}
      {...other}
    >
      <TransactionsTabGroups />
    </ItemForm>
  )
}

export default TransactionsForm
