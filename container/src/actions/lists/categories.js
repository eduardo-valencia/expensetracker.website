import { FETCH_CATEGORIES } from '../types'
import Generator from './generators/List'

const fetchCategories = () =>
  Generator.generateWithRoute('/categories', 'categories', FETCH_CATEGORIES)

export default fetchCategories
