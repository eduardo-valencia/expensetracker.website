import React from 'react'

import { useAppSelector } from '../../hooks/selector'
import RootState from '../../types/RootState'
import { useDispatch } from 'react-redux'
import { SelectChangeEvent } from '../../types/form'
import { SelectGroupProps } from '../../components/SelectGroup'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import IItemWithName from '../../types/items'
import { setCategoryFilter } from '../../actions/filters/categories'
import getRelatedRecordSelector, {
  RelatedRecordSelectorProps,
} from '../../components/RelatedRecordSelector'

interface Config extends Omit<RelatedRecordSelectorProps, 'selectGroupProps'> {
  createAction:
    | ActionCreatorWithPayload<string, string>
    | typeof setCategoryFilter
  filterKey: keyof RootState
  selectGroupProps: Omit<SelectGroupProps, 'id' | 'value' | 'onChange'>
}

const getFilterSelector = <Item extends IItemWithName>({
  filterKey,
  listKey,
  createAction,
  selectGroupProps,
}: Config) => {
  const FilterSelector = () => {
    const selectFilterAndList = ({ [filterKey]: filter }: RootState) => ({
      filter,
    })
    const { filter } = useAppSelector(selectFilterAndList)
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent): void => {
      dispatch(createAction(event.target.value as Item['_id']))
    }

    const RelatedRecordSelector = getRelatedRecordSelector<Item>()

    return (
      <RelatedRecordSelector
        listKey={listKey}
        selectGroupProps={{
          ...selectGroupProps,
          id: filterKey,
          value: filter || '',
          onChange: handleChange,
        }}
      />
    )
  }

  return FilterSelector
}

export default getFilterSelector
