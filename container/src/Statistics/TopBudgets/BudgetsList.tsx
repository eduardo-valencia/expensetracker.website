import _ from 'lodash'
import React from 'react'

import BudgetWithDialog from '../../components/BudgetWithDialog'
import getList from '../../components/List'
import { useAppSelector } from '../../hooks/selector'
import { selectBudgets } from '../../reducers/list/budgets'
import IBudget from '../../types/Budget'
import ITransaction from '../../types/Transaction'
import { getTopItems, StatisticsTopItem } from '../../utils/topItems'

type BudgetTopItem = StatisticsTopItem<IBudget>

const List = getList<BudgetTopItem>()

export interface BudgetsListProps {
  transactions: ITransaction[]
}

function BudgetsList({ transactions }: BudgetsListProps) {
  const { budgets } = useAppSelector(selectBudgets)

  const topBudgets: BudgetTopItem[] = getTopItems<IBudget>(
    budgets!,
    transactions,
    'budget'
  )

  return <List items={topBudgets} Item={BudgetWithDialog} />
}

export default BudgetsList
