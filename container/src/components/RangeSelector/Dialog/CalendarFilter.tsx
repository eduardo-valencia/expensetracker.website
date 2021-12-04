import React from 'react'
import { IDateState } from '../../../hooks/date'

import Calendar, { CalendarProps } from '../../Calendar'

export interface CalendarFilterProps
  extends IDateState,
    Omit<Partial<CalendarProps>, 'date' | 'onChange'> {}

export default function CalendarFilter({
  date,
  setDate,
  ...other
}: CalendarFilterProps) {
  const handleChange = (date: Date): void => {
    setDate(date)
  }

  return <Calendar date={date} onChange={handleChange} {...other} />
}
