import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default function PageError({ children }) {
  const message = (
    <>
      <h3>Sorry, there was a problem.</h3>
      <p>Please try again later.</p>
    </>
  )
  return <ErrorBoundary errorMessage={message}>{children}</ErrorBoundary>
}
