import React, { useContext } from 'react'
import {
  withStyles,
  WithStyles,
  createStyles,
  Button,
  Theme,
} from '@material-ui/core'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'

import { apiLinks } from '../../../constants/links'
import { ColorSchemeContext } from '../../../contexts/ColorScheme'
import { getSize } from '../../../utils/styles'

const styles = ({ typography: { buttonSm } }: Theme) => {
  return createStyles<'root' | 'icon' | 'iconLight' | 'iconDark', {}>({
    root: {
      ...buttonSm,
      padding: '0.75rem 0',
      width: '100%',
      letterSpacing: '-0.0187rem',
      marginBottom: '1.375rem',
      border: '0.0625rem solid #E1E4EB',
    },
    icon: {
      ...getSize('1.5rem'),
    },
    iconLight: {
      fill: 'black',
    },
    iconDark: {
      fill: '#fff',
    },
  })
}

interface Props extends WithStyles<typeof styles> {}

const GoogleButton = ({ classes }: Props) => {
  const { isDarkMode } = useContext(ColorSchemeContext)!

  const getIconClassName = (): string => {
    const colorSchemeClass: string = isDarkMode
      ? classes.iconDark
      : classes.iconLight
    return classNames(classes.icon, colorSchemeClass)
  }

  return (
    <Button
      variant="outlined"
      className={classes.root}
      href={apiLinks.google}
      startIcon={
        <FontAwesomeIcon className={getIconClassName()} icon={faGoogle} />
      }
    >
      Google
    </Button>
  )
}

export default withStyles(styles)(GoogleButton)
