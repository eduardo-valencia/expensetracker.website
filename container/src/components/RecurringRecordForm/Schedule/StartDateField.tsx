import { Field } from 'react-final-form'

import { fieldNames } from '../../../constants/recurringRecordForm'
import DateInput, { DateInputProps } from '../../itemDialog/DateInput'

const StartDateInput = (props: DateInputProps) => (
  <DateInput {...props} label="Start Date" />
)

const StartDateField = () => (
  <Field name={fieldNames.startDate} render={StartDateInput} />
)

export default StartDateField
