import React from 'react'

import LoadingIndicator from './LoadingIndicator'

interface Props {
  children: React.ReactNode
  isLoading: boolean
}

const LoadingWrapper = ({ children, isLoading }: Props) => {
  if (isLoading) {
    return <LoadingIndicator />
  }
  return <>{children}</>
}

export default LoadingWrapper
