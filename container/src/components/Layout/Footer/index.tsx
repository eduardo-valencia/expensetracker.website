import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'

import Bottom from './Bottom'
import Top from './Top'
import { ColorSchemeContext } from '../../../contexts/ColorScheme'
import classNames from 'classnames'

const styles = ({
  palette: {
    background: { paper },
  },
}: Theme) => {
  return createStyles({
    root: {
      color: 'white',
      fontSize: '0.9375rem',
      lineHeight: '1.5625rem',
      paddingTop: '4.8125rem',
      borderTop: 0,
    },
    light: {
      backgroundColor: '#390013',
    },
    dark: {
      backgroundColor: paper,
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const Footer = ({ classes }: Props) => {
  const { isDarkMode } = useContext(ColorSchemeContext)!

  const getClassName = (): string => {
    const colorSchemeClass: string = isDarkMode ? classes.dark : classes.light
    return classNames(classes.root, colorSchemeClass)
  }

  return (
    <footer className={getClassName()}>
      <Top />
      <Bottom />
    </footer>
  )
}

export default withStyles(styles)(Footer)
