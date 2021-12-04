import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import PageError from '../src/components/shared/Errors/PageError'
import StoreProvider from '../src/contexts/StoreProvider'
import ColorSchemeProvider from '../src/contexts/ColorScheme'
import ThemeProvider from '../src/contexts/ThemeProvider'
import NavContextProvider from '../src/contexts/NavContext'
import { validateEnvironmentVariables } from '../src/config/keys'
import FiltersContextProvider from '../src/contexts/Filters'

validateEnvironmentVariables()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageError>
      <Head>
        <title>Expense Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StoreProvider>
        <ColorSchemeProvider>
          <ThemeProvider>
            <NavContextProvider>
              <FiltersContextProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Component {...pageProps} />
                </MuiPickersUtilsProvider>
              </FiltersContextProvider>
            </NavContextProvider>
          </ThemeProvider>
        </ColorSchemeProvider>
      </StoreProvider>
    </PageError>
  )
}
