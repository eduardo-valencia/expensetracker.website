import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'

import RangeSelector, { RangeSelectorProps } from '../components/RangeSelector'
import { flexRowBreakpoint } from './styles'

const styles = ({ breakpoints: { up } }: Theme) => {
  return createStyles({
    root: {
      marginTop: '1.125rem',
      [up(flexRowBreakpoint)]: {
        marginTop: 0,
      },
    },
  })
}

interface Props
  extends Omit<RangeSelectorProps, 'classes'>,
    WithStyles<typeof styles> {}

const DateFilter = (props: Props) => {
  return (
    <RangeSelector
      {...props}
      dialogProps={{ calendarFilterProps: { disableFuture: true } }}
    />
  )
}

export default withStyles(styles)(DateFilter)
