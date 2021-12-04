import { Component } from 'react'

interface Props {
  errorMessage: string
}

export class ErrorBoundary extends Component<Props> {
  state = { errorExists: false }

  static getDerivedStateFromError() {
    return { errorExists: true }
  }

  render() {
    const { errorMessage, children } = this.props
    if (this.state.errorExists) {
      return errorMessage
    }
    return children
  }
}

export default ErrorBoundary
