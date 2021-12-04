import _ from 'lodash'

import { FETCH_CATEGORIES } from '../actions/types'
import ICategory from '../types/Category'
import RootState from '../types/RootState'
import reduceList from './list/generator'

const reduceCategories = reduceList(FETCH_CATEGORIES)

export const selectCategoryById = (id: ICategory['_id']) => {
  return ({ categories }: RootState): ICategory | undefined => {
    return _.find(categories, { _id: id })
  }
}

export const selectCategories = ({ categories }: RootState) => ({ categories })

export default reduceCategories
