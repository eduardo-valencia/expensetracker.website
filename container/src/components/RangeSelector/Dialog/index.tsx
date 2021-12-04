import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

import DateSelectionDialog from '../../DateSelectionDialog'
import Suggestions from './Suggestions'
import CalendarFilter, { CalendarFilterProps } from './CalendarFilter'
import { IDateState } from '../../../hooks/date'
import { IRangeState } from '../types'

const styles = () => {
  return createStyles({})
}

export interface DialogProps
  extends WithStyles<typeof styles>,
    IDateState,
    IRangeState {
  calendarFilterProps?: Partial<CalendarFilterProps>
}

const Dialog = ({
  classes,
  setDate,
  date,
  calendarFilterProps,
  ...rangeState
}: DialogProps) => {
  return (
    <DateSelectionDialog>
      <Suggestions {...rangeState} />
      <CalendarFilter
        date={date || new Date()}
        setDate={setDate}
        {...calendarFilterProps}
      />
    </DateSelectionDialog>
  )
}

export default withStyles(styles)(Dialog)
