import React from 'react'
import { useSelector } from 'react-redux'
import {
  Typography,
  withStyles,
  WithStyles,
  createStyles,
} from '@material-ui/core'

import RootState from '../../types/RootState'
import formatAmount from '../../utils/formatters/amount'

const mapStateToProps = ({ total }: RootState) => ({ total })

const styles = () => {
  return createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1.25rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const TransactionsTotal = ({ classes }: Props) => {
  const { total } = useSelector(mapStateToProps)

  const formattedAmount: string = formatAmount(total)

  return (
    <div className={classes.root}>
      <Typography variant="h5">Total:</Typography>
      <Typography variant="h5">{formattedAmount}</Typography>
    </div>
  )
}

export default withStyles(styles)(TransactionsTotal)
