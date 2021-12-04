import React, { useContext } from 'react'
import { AxiosResponse } from 'axios'

import { ItemDialogsContext } from '../contexts/ItemDialogsContext'
import EditButton from './editDialog/EditButton'
import FormDialog from './FormDialog'
import Hero from './FormDialog/Hero'
import { periods } from '../constants/recurringRecordForm'
import IRecurringRecord, {
  IEditableRecurringRecordFields,
} from '../types/RecurringRecord'
import { HeroProps } from './Hero'
import { ApiItemRepo } from '../repos/generators/ApiItem'
import RecurringRecordForm, {
  RecurringRecordFormProps,
} from './RecurringRecordForm'

interface Props extends Pick<HeroProps, 'title'> {
  itemInfo: IRecurringRecord
  edit: ApiItemRepo<IEditableRecurringRecordFields, IRecurringRecord>['edit']
  form: Omit<
    RecurringRecordFormProps,
    'close' | 'submit' | 'initialValues' | 'submitButton'
  >
}

function RecurringRecordEditDialog({ itemInfo, edit, title, form }: Props) {
  const { _id, startDate, interval } = itemInfo
  const itemStartDate: Date = new Date(startDate)

  const {
    editOpenState: { close, isOpen },
  } = useContext(ItemDialogsContext)

  const submit = (
    values: IEditableRecurringRecordFields
  ): Promise<AxiosResponse<IRecurringRecord>> => {
    return edit(_id, values)
  }

  const frequency: number =
    interval.type === 'dayOfMonth' ? interval.dayOfMonth : interval.days

  const period: string =
    interval.type === 'dayOfMonth' ? periods.dayOfMonth : periods.days

  return (
    <FormDialog
      isOpen={isOpen}
      close={close}
      PaperProps={{ 'aria-label': title }}
    >
      <Hero title={title} />
      <RecurringRecordForm
        close={close}
        submit={submit}
        initialValues={{
          ...itemInfo,
          startDate: itemStartDate,
          frequency,
          period,
        }}
        submitButton={<EditButton />}
        {...form}
      />
    </FormDialog>
  )
}

export default RecurringRecordEditDialog
