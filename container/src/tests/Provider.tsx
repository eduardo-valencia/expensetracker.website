import React from 'react'

import ColorSchemeProvider from '../contexts/ColorScheme'
import StoreProvider from '../contexts/StoreProvider'
import { ProviderProps } from '../contexts/types'
import ThemeProvider from '../contexts/ThemeProvider'

// Provider that is typically used to render a page
export default function Providers({ children }: ProviderProps) {
  return (
    <StoreProvider>
      <ColorSchemeProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ColorSchemeProvider>
    </StoreProvider>
  )
}
