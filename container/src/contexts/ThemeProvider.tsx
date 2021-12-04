import React, { useContext } from 'react'
import {
  ThemeProvider as BaseThemeProvider,
  CssBaseline,
  Theme,
} from '@material-ui/core'

import { ColorSchemeContext } from '../contexts/ColorScheme'
import baseTheme from '../theme'
import { ProviderProps } from '../contexts/types'
import { PaletteColor } from '@material-ui/core/styles/createPalette'

const ThemeProvider = ({ children }: ProviderProps) => {
  const { isDarkMode } = useContext(ColorSchemeContext)!

  const backgroundColor = isDarkMode ? '#0D152E' : '#fff'

  const { palette } = baseTheme
  const { text, background, primary, action, ellipses } = palette

  const getPrimaryStyles = (): PaletteColor => {
    if (isDarkMode) {
      return baseTheme.palette.augmentColor({
        main: '#fff',
        contrastText: primary.main,
      })
    }
    return primary
  }

  const darkSecondary: string = '#E7E7E7'

  const theme: Partial<Theme> = {
    ...baseTheme,
    palette: {
      ...baseTheme.palette,
      type: isDarkMode ? 'dark' : 'light',
      primary: getPrimaryStyles(),
      text: {
        ...text,
        primary: isDarkMode ? '#fff' : '#000',
        secondary: isDarkMode ? darkSecondary : text.secondary,
      },
      background: {
        ...background,
        default: backgroundColor,
        paper: isDarkMode ? '#101C3D' : background.default,
      },
      action: {
        ...action,
        disabled: isDarkMode ? '#e7e7e7b2' : action.disabled,
      },
      ellipses: {
        ...ellipses,
        secondary: isDarkMode ? '#283d77' : ellipses.secondary,
      },
    },
  }

  return (
    <BaseThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </BaseThemeProvider>
  )
}

export default ThemeProvider
