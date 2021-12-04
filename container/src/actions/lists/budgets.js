import Generator from './generators/List'
import { FETCH_BUDGETS } from '../types'

const fetchBudgetsList = () =>
  Generator.generateWithRoute('budgets', 'budgets', FETCH_BUDGETS)

export default fetchBudgetsList
