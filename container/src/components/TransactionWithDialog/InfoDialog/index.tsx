import React, { useContext } from 'react'

import { apiSubRoutes } from '../../../constants/links'
import ITransaction from '../../../types/Transaction'
import InformationDialog from '../../InformationDialog'
import DeleteButton from '../../InformationDialog/DeleteButton'
import EditButton from '../../InformationDialog/EditButton'
import Actions from '../../itemDialog/Actions'
import Hero from '../../itemDialog/Hero'
import Amount from '../../InformationDialog/Amount'
import fetchTransactions from '../../../actions/lists/transaction'
import Fields from '../../InformationDialog/Fields'
import DateField from '../../InformationDialog/DateField'
import BudgetField from './BudgetField'
import CategoryField from './CategoryField'
import { ItemDialogsContext } from '../../../contexts/ItemDialogsContext'

interface Props extends ITransaction {}

export default function Dialog({
  name,
  amount,
  _id,
  date: dateString,
  budget,
  category,
}: Props) {
  const {
    infoOpenState: { close, isOpen },
  } = useContext(ItemDialogsContext)

  const date = new Date(dateString)

  return (
    <InformationDialog close={close} isOpen={isOpen}>
      <Hero title={name} bottom={<Amount amount={amount} />} />
      <Fields>
        <DateField date={date} />
        {budget && <BudgetField budgetId={budget} />}
        {category && <CategoryField category={category} />}
      </Fields>
      <Actions>
        <EditButton />
        <DeleteButton
          itemId={_id}
          apiRouteId={apiSubRoutes.transactions}
          createRefreshListAction={fetchTransactions}
        />
      </Actions>
    </InformationDialog>
  )
}
