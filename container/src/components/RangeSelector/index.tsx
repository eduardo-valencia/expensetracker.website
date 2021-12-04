import React from 'react'

import SimpleFormControl, { SimpleFormControlProps } from '../SimpleFormControl'
import { useIsOpen } from '../../hooks/isOpen'
import DateSelectorButton from '../DateSelectorButton'
import Dialog, { DialogProps } from './Dialog'
import { DateSelectionDialogContext } from '../../contexts/DateSelectionDialogContext'
import { useSelectDate } from '../../hooks/date'
import { IRangeState } from './types'
import { getDayRange } from '../../utils/range'

export interface RangeSelectorProps
  extends IRangeState,
    SimpleFormControlProps {
  dialogProps?: Partial<DialogProps>
}

const RangeSelector = ({
  classes,
  setRange,
  range,
  dialogProps,
}: RangeSelectorProps) => {
  const openState = useIsOpen()
  const { date, setDate } = useSelectDate()

  const setRangeToDay = (): void => {
    const range = getDayRange(date!)
    setRange(range)
  }

  const closeAndSave = (): void => {
    openState.close()
    // Date should not update if the user hasn't selected one
    if (date) {
      setRangeToDay()
    }
  }

  const { minDate, maxDate } = range

  return (
    <DateSelectionDialogContext.Provider
      value={{ ...openState, close: closeAndSave }}
    >
      <SimpleFormControl classes={classes}>
        <DateSelectorButton startDate={minDate} endDate={maxDate} />
        <Dialog
          {...dialogProps}
          setDate={setDate}
          date={date}
          setRange={setRange}
          range={range}
        />
      </SimpleFormControl>
    </DateSelectionDialogContext.Provider>
  )
}

export default RangeSelector
