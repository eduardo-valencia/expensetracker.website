import { Field } from 'react-final-form'

import { fieldNames } from '../../../constants/transactionsForm'
import DateInput from '../../itemDialog/DateInput'

const DateField = () => <Field name={fieldNames.date} render={DateInput} />

export default DateField
