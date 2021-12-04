import React, { useContext } from 'react'

import { CreationDialogContext } from '../contexts/CreationDialogContext'
import CreationDialog from '../components/CreationDialog'
import CreateButton from '../components/CreationDialog/CreateButton'
import Hero from '../components/FormDialog/Hero'
import CategoryForm from '../components/CategoryForm'
import categoryRepo from '../repos/category'

function CategoryCreationDialog() {
  const { close } = useContext(CreationDialogContext)

  const title: string = 'Add Category'

  return (
    <CreationDialog PaperProps={{ 'aria-label': title }}>
      <Hero title={title} />
      <CategoryForm
        close={close}
        submit={categoryRepo.create}
        submitButton={<CreateButton />}
      />
    </CreationDialog>
  )
}

export default CategoryCreationDialog
