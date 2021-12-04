import React from 'react'
import {
  Tabs,
  withStyles,
  WithStyles,
  createStyles,
  TabsProps,
} from '@material-ui/core'

const styles = () => {
  return createStyles({
    indicator: {
      display: 'none',
    },
  })
}

interface Props
  extends WithStyles<typeof styles>,
    Omit<TabsProps<any>, 'classes'> {}

const SimpleTabsList = (props: Props) => {
  return <Tabs variant="scrollable" {...props} />
}

export default withStyles(styles)(SimpleTabsList)
