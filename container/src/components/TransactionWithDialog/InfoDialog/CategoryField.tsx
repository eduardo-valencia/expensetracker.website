import { Category } from '@material-ui/icons'
import React from 'react'

import { useAppSelector } from '../../../hooks/selector'
import { selectCategoryById } from '../../../reducers/categories'
import ICategory from '../../../types/Category'
import Field from '../../InformationDialog/Field'

interface Props {
  category: ICategory['_id']
}

export default function CategoryField({ category: categoryId }: Props) {
  const category = useAppSelector(selectCategoryById(categoryId))

  if (!category) return null

  return <Field title="Category" value={category.name} endIcon={<Category />} />
}
