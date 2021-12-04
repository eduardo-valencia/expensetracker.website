import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  TabProps,
  Tab,
  Theme,
} from '@material-ui/core'

const styles = ({
  palette: { primary, divider },
  typography: { buttonSm },
}: Theme) => {
  return createStyles({
    root: {
      ...buttonSm,
      padding: '0.375rem 1.25rem',
      borderRadius: '0.25rem',
      minWidth: '5rem',
      border: `0.0625rem solid ${divider}`,
      minHeight: '1.75rem',
      '& + &': {
        marginLeft: '0.375rem',
      },
    },
    selected: {
      backgroundColor: primary.main,
      color: primary.contrastText,
    },
  })
}

interface Props extends WithStyles<typeof styles>, Omit<TabProps, 'classes'> {}

const SimpleTab = (props: Props) => {
  return <Tab {...props} />
}

export default withStyles(styles)(SimpleTab)
