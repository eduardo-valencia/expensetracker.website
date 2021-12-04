import React from 'react'
import { makeStyles } from '@material-ui/core'

import Btn from './Btn'
import CloseButton from './CloseButton'
import { SearchState } from '../../reducers/search'
import { useAppSelector } from '../../hooks/selector'
import Search from '../Search'

const mapStateToProps = ({ query, isSearchExpanded }: SearchState) => ({
  query,
  isSearchExpanded,
})

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
})

const ExpandableSearch = () => {
  const { isSearchExpanded } = useAppSelector(mapStateToProps)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isSearchExpanded && (
        <Search
          textFieldProps={{
            InputProps: { startAdornment: <CloseButton /> },
          }}
        />
      )}
      {!isSearchExpanded && <Btn />}
    </div>
  )
}

export default ExpandableSearch
