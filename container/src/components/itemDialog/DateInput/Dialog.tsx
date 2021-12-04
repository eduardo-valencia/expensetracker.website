import React from 'react'

import DateSelectionDialog from '../../DateSelectionDialog'
import Calendar from '../../Calendar'
import { DateFieldRenderProps } from './types'

interface Props extends DateFieldRenderProps {}

function Dialog({ input: { onChange: changeDate, value } }: Props) {
  return (
    <DateSelectionDialog>
      <Calendar onChange={changeDate} date={value} />
    </DateSelectionDialog>
  )
}

export default Dialog
