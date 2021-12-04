import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { combineReducers } from 'redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function Env({ Component }) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const reducers = combineReducers({})
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

  return (
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  )
}

export default Env
