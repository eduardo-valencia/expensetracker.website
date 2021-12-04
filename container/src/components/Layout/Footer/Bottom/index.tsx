import React from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Container,
} from '@material-ui/core'

import Copyright from './Copyright'
import Credit from './Credit'
import { getFlexBreakpoint } from './styles'
import { getPaddingY } from '../../../../utils/styles'

const styles = (theme: Theme) => {
  const flexBreakpoint: string = getFlexBreakpoint(theme)
  return createStyles({
    root: {
      paddingTop: '1.625rem',
      paddingBottom: '1.25rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      [flexBreakpoint]: {
        ...getPaddingY('1.625rem'),
      },
      [theme.breakpoints.up('xl')]: {
        paddingTop: '1.8125rem',
        paddingBottom: '1.5625rem',
      },
    },
    container: {
      [flexBreakpoint]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Bottom = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Copyright />
        <Credit />
      </Container>
    </div>
  )
}

export default withStyles(styles)(Bottom)
