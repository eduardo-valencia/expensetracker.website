import React from 'react'
import {
  AppBar,
  Toolbar,
  createStyles,
  WithStyles,
  withStyles,
  Theme,
  Container,
  AppBarProps,
} from '@material-ui/core'

import { getPaddingX } from '../../../utils/styles'

const styles = ({
  palette: {
    background: { default: defaultBackground },
  },
  breakpoints: { up },
}: Theme) => {
  const backgroundColor: string = defaultBackground
  const minHeight: number = 0
  const paddingX: number = 0

  const xl = up('xl')

  return createStyles({
    root: {
      padding: `1rem ${paddingX}`,
      backgroundColor,
      boxShadow: 'none',
      top: 0,
      minHeight,
      [up('md')]: {
        marginTop: '1rem',
      },
      [xl]: {
        marginTop: '1.5rem',
      },
    },
    toolbar: {
      backgroundColor,
      minHeight,
      paddingLeft: paddingX,
      paddingRight: paddingX,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      maxWidth: '94.3125rem',
      [xl]: {
        ...getPaddingX(0),
      },
    },
    content: {
      display: 'flex',
      alignItems: 'center',
    },
  })
}

export interface NavProps extends WithStyles<typeof styles> {
  showLinks?: boolean
  position?: AppBarProps['position']
  right?: React.ReactNode
  drawer: React.ReactNode
  left?: React.ReactNode
}

const Nav = ({
  classes,
  showLinks = true,
  position = 'sticky',
  right = null,
  drawer,
  left,
}: NavProps) => {
  return (
    <div>
      <AppBar className={classes.root} position={position}>
        <Toolbar className={classes.toolbar}>
          <Container className={classes.container}>
            {left}
            {showLinks && right && (
              <div className={classes.content}>{right}</div>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      {drawer}
    </div>
  )
}

export default withStyles(styles)(Nav)
