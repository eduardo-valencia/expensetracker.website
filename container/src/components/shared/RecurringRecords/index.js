import React, { Component } from 'react'
import Layout from '../../Layout'
import Header from './Header'
import { title } from '../types'

export class RecurringRecordContainer extends Component {
  static propTypes = {
    title,
  }

  render() {
    const { children, title } = this.props
    return (
      <Layout header={(props) => <Header title={title} {...props} />}>
        {children}
      </Layout>
    )
  }
}

export default RecurringRecordContainer
