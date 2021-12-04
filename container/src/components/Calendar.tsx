import React from 'react'
import { Calendar as BaseCalendar } from '@material-ui/pickers'
import { CalendarProps as BaseCalendarProps } from '@material-ui/pickers/views/Calendar/Calendar'
import { createStyles, WithStyles, withStyles } from '@material-ui/core'

const styles = () => {
  return createStyles({
    root: {
      '& p': {
        fontSize: '1rem',
      },
    },
  })
}

export interface CalendarProps
  extends WithStyles<typeof styles>,
    Omit<BaseCalendarProps, 'classes' | 'utils' | 'theme'> {}

function Calendar({ classes, ...other }: CalendarProps) {
  return (
    <div className={classes.root}>
      <BaseCalendar
        {...other}
        leftArrowButtonProps={{ 'aria-label': 'Previous' }}
        rightArrowButtonProps={{ 'aria-label': 'Next' }}
      ></BaseCalendar>
    </div>
  )
}

export default withStyles(styles)(Calendar)
