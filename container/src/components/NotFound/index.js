import React from 'react'

import NotFoundSvg from './NotFoundSvg'
import Layout from '../Layout'

export default function NotFound() {
  return (
    <Layout showNav={true} requireAuth={false}>
      <div>
        <NotFoundSvg />
        <h1>Page not found. Please try another page.</h1>
      </div>
    </Layout>
  )
}
