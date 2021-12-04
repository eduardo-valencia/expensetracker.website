import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles, Button } from '@material-ui/core'

import { FiltersContext } from '../../contexts/Filters'
import SimpleDialog from '../../components/SimpleDialog'
import DialogToolbar from '../../components/DialogToolbar'
import Types from './TransactionTypes'
import CategorySelect from './CategorySelect'
import BudgetSelect from './BudgetSelect'
import DateFilter from './DateFilter'
import { useDispatch } from 'react-redux'
import fetchTransactions from '../../actions/lists/transaction'

const styles = () => {
  return createStyles({
    button: {
      marginTop: '2rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Filters = ({ classes }: Props) => {
  const { isOpen, close } = useContext(FiltersContext)
  const dispatch = useDispatch()

  const closeAndSave = (): void => {
    close()
    dispatch(fetchTransactions())
  }

  return (
    <SimpleDialog
      open={isOpen}
      onClose={closeAndSave}
      PaperProps={{ 'aria-label': 'Filters' }}
    >
      <DialogToolbar title="Filters" close={closeAndSave} />
      <Types />
      <DateFilter />
      <CategorySelect />
      <BudgetSelect />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className={classes.button}
        onClick={closeAndSave}
      >
        Apply
      </Button>
    </SimpleDialog>
  )
}

export default withStyles(styles)(Filters)
