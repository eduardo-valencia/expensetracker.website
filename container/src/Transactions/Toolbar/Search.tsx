import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

import Search from '../../components/Search'

const styles = ({
  palette: {
    text: { secondary: textSecondary },
  },
  typography: { buttonSm },
}: Theme) => {
  return createStyles({
    root: {
      width: '100%',
    },
    textField: {
      ...buttonSm,
      borderRadius: '0.3125rem',
    },
    input: {
      padding: '0.6875rem',
      color: 'black',
    },
    icon: {
      width: '1.5rem',
      marginRight: '0.5rem',
      color: textSecondary,
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const ToolbarSearch = ({
  classes: { icon, input, textField, ...otherClasses },
}: Props) => {
  return (
    <Search
      classes={otherClasses}
      textFieldProps={{
        className: textField,
        InputProps: {
          startAdornment: <SearchIcon className={icon} />,
          classes: { input: input },
        },
      }}
    />
  )
}

export default withStyles<any, any, any>(styles)(ToolbarSearch)
