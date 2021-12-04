import React from 'react'
import { FieldRenderProps, Field } from 'react-final-form'

import { fieldNames } from '../../../constants/transactionsForm'
import FormGroup from '../../FormGroup'
import JoinedTab from '../../JoinedTab'
import Label from '../../Label'
import SimpleTabsList from '../../SimpleTabsList'

interface Props extends FieldRenderProps<string> {}

function TransactionType({
  input: { onChange: changeFieldValue, value },
}: Props) {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    changeFieldValue(newValue)
  }

  return (
    <FormGroup>
      <Label>Type</Label>
      <SimpleTabsList value={value} onChange={handleChange}>
        <JoinedTab label="Expense" value="expense" />
        <JoinedTab label="Income" value="income" />
      </SimpleTabsList>
    </FormGroup>
  )
}

const TransactionTypeField = () => {
  return <Field name={fieldNames.type} render={TransactionType} />
}

export default TransactionTypeField
