import React from 'react'
import { Repeat } from '@material-ui/icons'

import { formatDate } from '../../utils/formatters/date'
import Field from './Field'
import TInterval from '../../types/Interval'
import getNextDueDate from '../../utils/dates/nextDue'

interface Props {
  interval: TInterval
  startDate: Date
}

export default function RepeatsField({ interval, startDate }: Props) {
  const nextDue: Date = getNextDueDate(interval, null, startDate)
  const formattedDate: string = formatDate(nextDue)

  const getTitle = (): string => {
    if (interval.type === 'dayOfMonth') {
      return `Repeats on day ${interval.dayOfMonth} of every month`
    }
    return `Repeats every ${interval.days} days`
  }

  return (
    <Field
      title={getTitle()}
      value={`Next due on ${formattedDate}`}
      endIcon={<Repeat />}
    />
  )
}
