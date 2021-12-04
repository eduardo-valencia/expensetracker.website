import React from 'react'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import { ProviderProps } from './types'

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
}

const StoreProvider = ({ children }: ProviderProps) => {
  const composeEnhancers =
    typeof window !== 'undefined'
      ? (window as Window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
