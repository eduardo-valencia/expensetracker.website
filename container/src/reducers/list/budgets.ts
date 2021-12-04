import _ from 'lodash'

import reduceList from './generator'
import { FETCH_BUDGETS } from '../../actions/types'
import RootState from '../../types/RootState'
import IBudget from '../../types/Budget'

const reduceBudgets = reduceList(FETCH_BUDGETS)

export const selectBudgets = ({ budgets }: RootState) => ({ budgets })

export const selectBudgetWithId =
  (id: IBudget['_id']) =>
  ({ budgets }: RootState): IBudget | undefined => {
    return _.find(budgets, { _id: id })
  }

export default reduceBudgets
