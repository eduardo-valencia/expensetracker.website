import { AxiosResponse } from 'axios'

import { apiSubRoutes } from '../constants/links'
import ICategory from '../types/Category'
import { ApiItemRepo } from './generators/ApiItem'

export interface IEditableCategoryFields extends Pick<ICategory, 'name'> {}

export type CategoryResponse = AxiosResponse<ICategory>

const categoryRepo = new ApiItemRepo<IEditableCategoryFields, ICategory>(
  apiSubRoutes.categories
)

export default categoryRepo
