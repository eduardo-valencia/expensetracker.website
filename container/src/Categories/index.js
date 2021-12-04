import React, { Component } from 'react'

import List from './List'
import ListError from '../components/shared/Errors/List'
import ListPage from '../components/shared/ListPage'
import Hero from '../components/Hero'
import CreationDialog from './CreationDialog'

export class Categories extends Component {
  render() {
    return (
      <ListPage routeId="categories">
        <ListError>
          <Hero title="Categories" />
          <List />
        </ListError>
        <CreationDialog />
      </ListPage>
    )
  }
}

export default Categories
