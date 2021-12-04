import _ from 'lodash'

import IApiItem from '../types/ApiItem'
import ITransaction from '../types/Transaction'
import { getTotal } from './total'

export type StatisticsTopItem<Item extends IApiItem> = Item & { total: number }

export const getTopItems = <Item extends IApiItem>(
  items: Item[],
  transactions: ITransaction[],
  keyInTransaction: keyof ITransaction
): StatisticsTopItem<Item>[] => {
  type TopItem = StatisticsTopItem<Item>

  const getItemTotal = (itemId: Item['_id']): number => {
    const itemTransactions: ITransaction[] = _.filter(transactions!, {
      [keyInTransaction]: itemId,
    })
    return getTotal(itemTransactions)
  }

  const getMergedList = (topItems: TopItem[], item: Item): TopItem[] => {
    return [
      ...topItems,
      {
        ...item,
        total: getItemTotal(item._id),
      },
    ]
  }

  const addItemWithTotal = (topItems: TopItem[], item: Item): TopItem[] => {
    const total: number = getItemTotal(item._id)
    if (total <= 0) return topItems
    return getMergedList(topItems, item)
  }

  const getSortedItems = (): TopItem[] => {
    const statisticsCategories: TopItem[] = items.reduce(addItemWithTotal, [])
    return _.sortBy(statisticsCategories, 'total')
  }

  const getSlicedItems = (): TopItem[] => {
    const sortedByTotal: TopItem[] = getSortedItems()
    const startIndex = sortedByTotal.length - 3
    return sortedByTotal.slice(startIndex)
  }

  const slicedItems: TopItem[] = getSlicedItems()
  return slicedItems.reverse()
}
