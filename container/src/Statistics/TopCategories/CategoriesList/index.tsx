import _ from 'lodash'
import React from 'react'

import getList from '../../../components/List'
import { useAppSelector } from '../../../hooks/selector'
import ICategory from '../../../types/Category'
import RootState from '../../../types/RootState'
import ITransaction from '../../../types/Transaction'
import { getTopItems } from '../../../utils/topItems'
import { IStatisticsCategory } from '../types'
import Category from './Category'

const List = getList<IStatisticsCategory>()

const mapStateToProps = ({ categories }: RootState) => ({
  categories,
})

export interface CategoriesListProps {
  transactions: ITransaction[]
}

function CategoriesList({ transactions }: CategoriesListProps) {
  const { categories } = useAppSelector(mapStateToProps)

  const topCategories: IStatisticsCategory[] = getTopItems<ICategory>(
    categories,
    transactions,
    'category'
  )

  return <List items={topCategories} Item={Category} />
}

export default CategoriesList
