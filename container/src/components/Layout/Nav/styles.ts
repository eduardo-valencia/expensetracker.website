import { Theme } from '@material-ui/core'

export const expandBreakpoint = 'lg'

export const getExpandBreakpoint = (theme: Theme): string =>
  theme.breakpoints.up(expandBreakpoint)
