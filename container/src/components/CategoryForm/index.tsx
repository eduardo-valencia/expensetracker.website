import React from 'react'

import { useFetchCategories } from '../../hooks/categories'
import { IEditableCategoryFields } from '../../repos/category'
import ICategory from '../../types/Category'
import { EditOrInfoFormProps } from '../../types/form'
import FormValidator from '../../utils/form/FormValidator'
import getItemForm from '../ItemForm'
import NameField from './NameField'

interface Props
  extends EditOrInfoFormProps<IEditableCategoryFields, ICategory> {}

const ItemForm = getItemForm<IEditableCategoryFields>()

function CategoryForm({ submit, ...other }: Props) {
  const fetchCategories = useFetchCategories()

  const formValidator = new FormValidator<IEditableCategoryFields>()
  const validate = formValidator.getValidator(['name'])

  return (
    <ItemForm
      submit={submit}
      validate={validate}
      updateList={fetchCategories}
      {...other}
    >
      <NameField />
    </ItemForm>
  )
}

export default CategoryForm
