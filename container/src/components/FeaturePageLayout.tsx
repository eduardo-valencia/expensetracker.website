import React from 'react'

import NavContextProvider from '../contexts/NavContext'
import Layout, { LayoutProps } from './Layout'

type Props = Omit<LayoutProps, 'fetchAndSetUser' | 'user' | 'classes'>

/**
 * Applies to all non-app pages
 */
function FeaturePageLayout(props: Props) {
  return (
    <NavContextProvider>
      <Layout {...props} />
    </NavContextProvider>
  )
}

export default FeaturePageLayout
