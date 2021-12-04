import React, { useContext } from 'react'
import { periods } from '../constants/recurringRecordForm'

import { CreationDialogContext } from '../contexts/CreationDialogContext'
import CreationDialog from './CreationDialog'
import CreateButton from './CreationDialog/CreateButton'
import Hero from './FormDialog/Hero'
import { HeroProps } from './Hero'
import RecurringRecordForm, {
  RecurringRecordFormProps,
} from './RecurringRecordForm'

interface Props extends Pick<HeroProps, 'title'> {
  formProps: Omit<
    RecurringRecordFormProps,
    'close' | 'submitButton' | 'initialValues'
  >
}

function RecurringRecordCreationDialog({ title, formProps }: Props) {
  const { close } = useContext(CreationDialogContext)

  return (
    <CreationDialog PaperProps={{ 'aria-label': title }}>
      <Hero title={title} />
      <RecurringRecordForm
        close={close}
        submitButton={<CreateButton />}
        initialValues={{
          startDate: new Date(),
          period: periods.days,
        }}
        {...formProps}
      />
    </CreationDialog>
  )
}

export default RecurringRecordCreationDialog
