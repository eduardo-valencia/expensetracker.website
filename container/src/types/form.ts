import { AxiosResponse } from 'axios'
import { ItemFormProps } from '../components/ItemForm'

export type SelectChangeEvent<Value = unknown> = React.ChangeEvent<{
  name?: string
  value: Value
}>

export interface EditOrInfoFormProps<
  FormValues,
  ResponseData,
  SubmitData = FormValues
> extends Omit<
    ItemFormProps<FormValues>,
    'submit' | 'validate' | 'children' | 'updateList'
  > {
  submit: (values: SubmitData) => Promise<AxiosResponse<ResponseData>>
}
