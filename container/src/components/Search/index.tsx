import React, { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, OutlinedTextFieldProps } from '@material-ui/core'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

import { setQuery } from '../../actions/search'
import { SearchState } from '../../reducers/search'
import { useAppSelector } from '../../hooks/selector'
import { useFetchTransactions } from '../../hooks/transactions'

const mapStateToProps = ({ query, isSearchExpanded }: SearchState) => ({
  query,
  isSearchExpanded,
})

const styles = () => {
  return createStyles({
    root: {
      width: '100%',
    },
  })
}

interface Props extends WithStyles<typeof styles> {
  textFieldProps: Omit<OutlinedTextFieldProps, 'variant'>
}

const Search = ({ classes, textFieldProps }: Props) => {
  const { query } = useAppSelector(mapStateToProps)
  const dispatch = useDispatch()
  const fetchTransactions = useFetchTransactions()

  const handleSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetchTransactions()
  }

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(value))
    fetchTransactions()
  }

  return (
    <form onSubmit={handleSubmission} className={classes.root}>
      <TextField
        fullWidth
        variant="outlined"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        {...textFieldProps}
      />
    </form>
  )
}

export default withStyles(styles)(Search)
