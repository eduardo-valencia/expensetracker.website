import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default function List({ children }) {
  const message = (
    <>
      <h4>There was a problem loading this list.</h4>
      <p>Please try again later.</p>
    </>
  )
  return <ErrorBoundary errorMessage={message}>{children}</ErrorBoundary>
}
