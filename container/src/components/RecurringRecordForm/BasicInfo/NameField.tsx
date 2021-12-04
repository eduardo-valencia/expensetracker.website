import { Field } from 'react-final-form'

import { fieldNames } from '../../../constants/recurringRecordForm'
import NameInput from '../../FormDialog/NameInput'

const NameField = () => {
  return <Field name={fieldNames.name} render={NameInput} />
}

export default NameField
