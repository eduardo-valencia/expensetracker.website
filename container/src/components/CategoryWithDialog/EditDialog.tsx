import React, { useContext } from 'react'

import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'
import ICategory from '../../types/Category'
import EditButton from '../editDialog/EditButton'
import FormDialog, { FormDialogProps } from '../FormDialog'
import Hero from '../FormDialog/Hero'
import CategoryForm from '../CategoryForm'
import categoryRepo, {
  IEditableCategoryFields,
  CategoryResponse,
} from '../../repos/category'

interface Props extends Omit<FormDialogProps, 'children'> {
  category: ICategory
}

function EditDialog({ category, ...other }: Props) {
  const { name, _id } = category

  const {
    editOpenState: { close },
  } = useContext(ItemDialogsContext)

  const submit = (
    values: IEditableCategoryFields
  ): Promise<CategoryResponse> => {
    return categoryRepo.edit(_id, values)
  }

  const title: string = 'Edit category'

  return (
    <FormDialog {...other} PaperProps={{ 'aria-label': title }}>
      <Hero title={title} />
      <CategoryForm
        close={close}
        submit={submit}
        initialValues={{ name }}
        submitButton={<EditButton />}
      />
    </FormDialog>
  )
}

export default EditDialog
