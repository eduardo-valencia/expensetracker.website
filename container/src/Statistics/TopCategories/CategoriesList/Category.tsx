import React from 'react'

import CategoryWithDialog, {
  CategoryWithDialogProps,
} from '../../../components/CategoryWithDialog'
import formatAmount from '../../../utils/formatters/amount'
import { IStatisticsCategory } from '../types'

interface Props
  extends Omit<CategoryWithDialogProps, 'classes'>,
    Pick<IStatisticsCategory, 'total'> {}

function Category({ total, ...other }: Props) {
  return (
    <CategoryWithDialog
      {...other}
      categoryProps={{ formattedAmount: formatAmount(total) }}
    />
  )
}

export default Category
