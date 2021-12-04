import React from 'react'

import ICategory from '../../types/Category'
import SimpleListItem, { SimpleListItemProps } from '../SimpleListItem'

export interface CategoryProps
  extends ICategory,
    Omit<SimpleListItemProps, 'title' | 'classes'> {}

const Category = ({ name, ...other }: CategoryProps) => {
  return <SimpleListItem title={name} {...other} />
}

export default Category
