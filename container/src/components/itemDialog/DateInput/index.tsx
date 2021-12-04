import React from 'react'

import DateSelectionDialogContextProvider from '../../../contexts/DateSelectionDialogContext'
import DateSelectorButton from '../../DateSelectorButton'
import FormGroup from '../../FormGroup'
import Label from '../../Label'
import Dialog from './Dialog'
import { DateFieldRenderProps } from './types'

export interface DateInputProps extends DateFieldRenderProps {
  label?: string
}

function DateInput({ label = 'Date', ...other }: DateInputProps) {
  const {
    input: { value },
  } = other
  return (
    <FormGroup>
      <Label>Date</Label>
      <DateSelectionDialogContextProvider>
        <DateSelectorButton startDate={value} />
        <Dialog {...other} />
      </DateSelectionDialogContextProvider>
    </FormGroup>
  )
}

export default DateInput
