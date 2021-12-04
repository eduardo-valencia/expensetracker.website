import ICategory from '../../types/Category'
import { setCategoryFilter } from '../../actions/filters/categories'
import getFilterSelector from './FilterSelector'

const CategorySelect = getFilterSelector<ICategory>({
  filterKey: 'categoryFilter',
  listKey: 'categories',
  createAction: setCategoryFilter,
  selectGroupProps: { label: 'Categories' },
})

export default CategorySelect
