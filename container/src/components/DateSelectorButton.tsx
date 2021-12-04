import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Button,
  Theme,
  ButtonProps,
} from '@material-ui/core'
import { CalendarToday } from '@material-ui/icons'
import isEqual from 'date-fns/isEqual'

import { formatDate } from '../utils/formatters/date'
import { DateSelectionDialogContext } from '../contexts/DateSelectionDialogContext'

const styles = ({
  palette: {
    divider,
    form: { text },
  },
  typography: { buttonSm },
}: Theme) => {
  return createStyles<'root' | 'startIcon', {}>({
    root: {
      ...buttonSm,
      border: `0.0625rem solid ${divider}`,
      padding: '0.625rem 1.25rem',
      color: text,
    },
    startIcon: {
      width: '1.125rem',
      marginRight: '0.5rem',
      color: '#D9DCE3',
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<ButtonProps, 'classes' | 'children' | 'onClick'> {
  startDate?: Date | null
  endDate?: Date | null
}

const DateSelectorButton = ({
  classes,
  startDate,
  endDate,
  ...other
}: Props) => {
  const { open } = useContext(DateSelectionDialogContext)

  const getFormattedRange = (formattedStartDate: string): string => {
    const formattedEndDate: string = formatDate(endDate!)
    return `${formattedStartDate} - ${formattedEndDate}`
  }

  const formatDates = (): string => {
    const formattedStartDate: string = formatDate(startDate!)
    if (endDate && !isEqual(startDate!, endDate)) {
      return getFormattedRange(formattedStartDate)
    }
    return formattedStartDate
  }

  const text: string = startDate ? formatDates() : 'Select Date'

  return (
    <Button
      variant="outlined"
      classes={classes}
      startIcon={<CalendarToday />}
      onClick={open}
      {...other}
    >
      {text}
    </Button>
  )
}

export default withStyles(styles)(DateSelectorButton)
