import React from 'react'

import { CalendarToday } from '@material-ui/icons'
import Field from './Field'
import { formatDate } from '../../utils/formatters/date'

interface Props {
  date: Date
  title?: string
}

export default function DateField({ date, title = 'Date' }: Props) {
  const formattedDate = formatDate(date)
  return (
    <Field title={title} value={formattedDate} endIcon={<CalendarToday />} />
  )
}
