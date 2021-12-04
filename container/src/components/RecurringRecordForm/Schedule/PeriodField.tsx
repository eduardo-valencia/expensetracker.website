import { MenuItem } from '@material-ui/core'
import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

import { fieldNames, periods } from '../../../constants/recurringRecordForm'
import { SelectChangeEvent } from '../../../types/form'
import SelectGroup from '../../SelectGroup'
import { IRecurringRecordFormValues } from '../types'

const PeriodInput = ({
  input: { onChange: change, value },
}: FieldRenderProps<IRecurringRecordFormValues['period']>) => {
  const handleChange = (event: SelectChangeEvent) => {
    change(event.target.value)
  }

  return (
    <SelectGroup
      onChange={handleChange}
      value={value}
      label="Frequency"
      id={fieldNames.period}
    >
      <MenuItem value={periods.days}>Days</MenuItem>
      <MenuItem value={periods.weeks}>Weeks</MenuItem>
      <MenuItem value={periods.months}>Months</MenuItem>
      <MenuItem value={periods.dayOfMonth}>Day of each month</MenuItem>
    </SelectGroup>
  )
}

const PeriodField = () => (
  <Field name={fieldNames.period} render={PeriodInput} />
)

export default PeriodField
