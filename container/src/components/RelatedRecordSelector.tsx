import React from 'react'
import { MenuItem } from '@material-ui/core'

import { useAppSelector } from '../hooks/selector'
import IItemWithName from '../types/items'
import RootState from '../types/RootState'
import SelectGroup, { SelectGroupProps } from './SelectGroup'

export interface RelatedRecordSelectorProps {
  listKey: keyof RootState
  selectGroupProps: SelectGroupProps
}

const getRelatedRecordSelector = <Item extends IItemWithName>() => {
  const Selector = ({
    listKey,
    selectGroupProps,
  }: RelatedRecordSelectorProps) => {
    const selectFilterAndList = ({ [listKey]: items }: RootState) => ({
      items,
    })

    const { items } = useAppSelector(selectFilterAndList)

    const renderItem = ({ _id, name }: Item): JSX.Element => {
      return (
        <MenuItem key={_id} value={_id}>
          {name}
        </MenuItem>
      )
    }

    const renderedItems: JSX.Element[] = (items as Item[]).map(renderItem)

    return <SelectGroup {...selectGroupProps}>{renderedItems}</SelectGroup>
  }

  return Selector
}

export default getRelatedRecordSelector
