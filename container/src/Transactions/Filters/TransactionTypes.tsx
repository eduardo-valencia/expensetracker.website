import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import RootState from '../../types/RootState'
import { useAppSelector } from '../../hooks/selector'
import { setTransactionType } from '../../actions/filters/transactionTypes'
import SimpleTabsList from '../../components/SimpleTabsList'
import SimpleTab from '../../components/SimpleTab'
import SimpleFormControl from '../../components/SimpleFormControl'

const styles = () => {
  return createStyles({})
}

interface Props extends WithStyles<typeof styles> {}

const mapStateToProps = ({ transactionType }: RootState) => ({
  transactionType,
})

const TransactionTypes = ({ classes }: Props) => {
  const dispatch = useDispatch()
  const { transactionType } = useAppSelector(mapStateToProps)

  const handleChange = (event: any, value: any) => {
    dispatch(setTransactionType(value))
  }

  return (
    <SimpleFormControl>
      <SimpleTabsList
        value={transactionType}
        onChange={handleChange}
        aria-label="Select transaction type"
      >
        <SimpleTab label="All" value="all" />
        <SimpleTab label="Income" value="income" />
        <SimpleTab label="Expense" value="expense" />
      </SimpleTabsList>
    </SimpleFormControl>
  )
}

export default withStyles(styles)(TransactionTypes)
