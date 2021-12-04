import React, { Component } from 'react'
import Loading from '../../components/LoadingIndicator'
import { connect } from 'react-redux'

class LoadingMore extends Component {
  render() {
    const { isLoading } = this.props
    if (!isLoading) return null
    return <Loading></Loading>
  }
}

const mapStateToProps = ({ areTransactionsLoading }) => ({
  isLoading: areTransactionsLoading,
})

export default connect(mapStateToProps)(LoadingMore)
