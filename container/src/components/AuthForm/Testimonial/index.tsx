import React, { useContext } from 'react'
import {
  Container,
  withStyles,
  WithStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { flexBreakpoint } from '../styles'
import Stars from './Stars'
import Author from './Author'
import { ColorSchemeContext } from '../../../contexts/ColorScheme'
import classNames from 'classnames'

const styles = ({
  breakpoints: { up },
  palette: {
    background: { paper },
  },
}: Theme) => {
  const flexBreakpointUp = up(flexBreakpoint)
  return createStyles({
    root: {
      padding: '4rem 0',
      color: 'white',
      [up('md')]: {
        padding: '7.5rem 0',
      },
      [flexBreakpointUp]: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        width: '49%',
        paddingLeft: '4.375rem',
        flexShrink: 0,
      },
    },
    light: {
      backgroundColor: '#5E1C32',
    },
    dark: {
      backgroundColor: paper,
    },
    container: {
      [flexBreakpointUp]: {
        margin: 0,
        width: '29.0625rem',
        padding: 0,
      },
    },
    quote: {
      fontSize: '1.25rem',
      lineHeight: '2.125rem',
      letterSpacing: '-0.0413rem',
      marginBottom: '2.3125rem',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Testimonial = ({ classes }: Props) => {
  const { isDarkMode } = useContext(ColorSchemeContext)!

  const getClassName = (): string => {
    const colorSchemeClass: string = isDarkMode ? classes.dark : classes.light
    return classNames(classes.root, colorSchemeClass)
  }

  return (
    <aside className={getClassName()}>
      <Container className={classes.container}>
        <Stars />
        <Typography className={classes.quote}>
          "Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.In the first part."
        </Typography>
        <Author />
      </Container>
    </aside>
  )
}

export default withStyles(styles)(Testimonial)
