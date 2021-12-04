import React, { useContext } from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core'
import classNames from 'classnames'

import Section from '../../components/Section'
import Body from './Body'
import Image from './Image'
import Container from './Container'
import { paddingYMd } from './styles'
import { ColorSchemeContext } from '../../contexts/ColorScheme'

const styles = ({
  palette: { background, primary },
  breakpoints: { up },
}: Theme) => {
  return createStyles({
    root: {
      padding: '3.125rem 0',
      [up('md')]: {
        padding: `${paddingYMd} 0`,
      },
    },
    light: {
      backgroundColor: primary.main,
    },
    dark: {
      backgroundColor: background.paper,
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const CallToAction = ({ classes }: Props) => {
  const { isDarkMode } = useContext(ColorSchemeContext)!

  const getClassName = (): string => {
    const colorSchemeClass: string = isDarkMode ? classes.dark : classes.light
    return classNames(classes.root, colorSchemeClass)
  }

  return (
    <Section
      classes={{ root: getClassName() }}
      body={<Body />}
      childrenDirection="left"
      Container={Container}
    >
      <Image />
    </Section>
  )
}

export default withStyles(styles)(CallToAction)
