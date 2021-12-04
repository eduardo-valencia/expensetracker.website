import React, { useContext } from 'react'

import { ItemDialogsContext } from '../contexts/ItemDialogsContext'
import IRecurringRecord from '../types/RecurringRecord'
import InformationDialog from './InformationDialog'
import Amount from './InformationDialog/Amount'
import DateField from './InformationDialog/DateField'
import DeleteButton, {
  DeleteButtonProps,
} from './InformationDialog/DeleteButton'
import EditButton from './InformationDialog/EditButton'
import Fields from './InformationDialog/Fields'
import RepeatsField from './InformationDialog/RepeatsField'
import Actions from './itemDialog/Actions'
import Hero from './itemDialog/Hero'

interface Props extends Omit<DeleteButtonProps, 'itemId' | 'classes'> {
  itemInfo: IRecurringRecord
}

function RecurringRecordInfoDialog({
  itemInfo: { name, amount, startDate, interval, _id },
  ...other
}: Props) {
  const {
    infoOpenState: { close, isOpen },
  } = useContext(ItemDialogsContext)

  return (
    <InformationDialog close={close} isOpen={isOpen}>
      <Hero title={name} bottom={<Amount amount={amount} />} />
      <Fields>
        <RepeatsField startDate={new Date(startDate)} interval={interval} />
        <DateField date={new Date(startDate)} title="Start Date" />
      </Fields>
      <Actions>
        <EditButton />
        <DeleteButton itemId={_id} {...other} />
      </Actions>
    </InformationDialog>
  )
}

export default RecurringRecordInfoDialog
