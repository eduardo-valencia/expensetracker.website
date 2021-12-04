import React from 'react'

import { ItemDialogsContext } from '../../contexts/ItemDialogsContext'
import useEditAndInfoState from '../../hooks/editAndInfoState'
import ICategory from '../../types/Category'
import Category, { CategoryProps } from './Category'
import EditDialog from './EditDialog'
import InfoDialog from './InfoDialog'

export interface CategoryWithDialogProps extends ICategory {
  categoryProps?: Partial<Omit<CategoryProps, 'classes'>>
}

export default function CategoryWithDialog({
  categoryProps,
  ...category
}: CategoryWithDialogProps) {
  const editAndInfoState = useEditAndInfoState()
  const {
    editOpenState: { isOpen, close },
  } = editAndInfoState

  return (
    <ItemDialogsContext.Provider value={editAndInfoState}>
      <InfoDialog category={category} />
      <EditDialog category={category} close={close} isOpen={isOpen} />
      <Category {...category} {...categoryProps} />
    </ItemDialogsContext.Provider>
  )
}
