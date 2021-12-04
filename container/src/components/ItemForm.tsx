import { AxiosResponse } from 'axios'
import { SubmissionErrors } from 'final-form'
import { OpenState } from '../hooks/isOpen'
import { handleError, validateResponse } from '../utils/form/errors'
import Actions from './FormDialog/Actions'
import getFormWithErrors, { FormWithErrorsProps } from './FormWithErrors'

export interface ItemFormProps<Values>
  extends Omit<FormWithErrorsProps<Values>, 'onSubmit'> {
  close: OpenState['close']
  submitButton: React.ReactNode
  submit: (values: Values) => Promise<AxiosResponse<any>>
  updateList: () => any
}

const getItemForm = <Values extends unknown>() => {
  const FormWithErrors = getFormWithErrors<Values>()

  const ItemForm = ({
    close,
    submitButton,
    submit,
    children,
    updateList,
    ...other
  }: ItemFormProps<Values>) => {
    const submitAndValidate = async (values: Values): Promise<void> => {
      const response = await submit(values)
      validateResponse(response)
      updateList()
      close()
    }

    const trySubmittingAndValidating = async (
      values: Values
    ): Promise<SubmissionErrors | void> => {
      try {
        await submitAndValidate(values)
      } catch (error: any) {
        return handleError(error)
      }
    }

    return (
      <FormWithErrors onSubmit={trySubmittingAndValidating} {...other}>
        {children}
        <Actions>{submitButton}</Actions>
      </FormWithErrors>
    )
  }

  return ItemForm
}

export default getItemForm
