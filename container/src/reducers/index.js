import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import transactions from './transaction'
import total, { reduceMonthTotals } from './total'
import categories from './categories'
import { reduceAreTransactionsLoading } from './list/isLoading'
import budgets from './list/budgets'
import bills from './list/bills'
import user from './user'

import reduceNavVisibility from './nav'
import { reduceQuery, reduceIsExpanded } from './search'
import { reduceTransactionType as transactionType } from './filters/transactionTypes'
import { reduceCategory as categoryFilter } from './filters/categories'
import range from './ranges/range'
import statsMonth from './ranges/statsRange'
import budgetFilter from './filters/budget'

export default combineReducers({
  transactions,
  range,
  form: formReducer,
  categories,
  isNavVisible: reduceNavVisibility,
  query: reduceQuery,
  isSearchExpanded: reduceIsExpanded,
  areTransactionsLoading: reduceAreTransactionsLoading,
  monthTotals: reduceMonthTotals,
  transactionType,
  categoryFilter,
  statsMonth,
  user,
  bills,
  budgets,
  total,
  budgetFilter,
})
