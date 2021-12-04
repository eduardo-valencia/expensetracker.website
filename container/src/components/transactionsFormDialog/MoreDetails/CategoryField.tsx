import { Field } from 'react-final-form'
import { fieldNames } from '../../../constants/transactionsForm'

import ICategory from '../../../types/Category'
import generateSelector from './Selector'

const CategoryInput = generateSelector<ICategory>({
  listKey: 'categories',
  selectGroupProps: { id: 'categories', label: 'Category' },
})

const CategoryField = () => (
  <Field name={fieldNames.category} render={CategoryInput} />
)

export default CategoryField
