import { SubmissionErrors } from 'final-form'

import { errors as errorMessages } from '../../constants/authForm'

class FormValidator<FormValues> {
  addValidationError = (values: Partial<FormValues>) => {
    return (
      errors: SubmissionErrors,
      name: keyof FormValues
    ): SubmissionErrors => {
      if (!values[name]) {
        return {
          ...errors,
          [name]: errorMessages.emptyField,
        }
      }
      return errors
    }
  }

  validate =
    (requiredFields: (keyof FormValues)[]) => (values: Partial<FormValues>) => {
      return requiredFields.reduce(this.addValidationError(values), {})
    }

  getValidator = (requiredFields: (keyof FormValues)[]) => {
    return this.validate(requiredFields)
  }
}

export default FormValidator
