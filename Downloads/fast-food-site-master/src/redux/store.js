import { createStore, applyMiddleware, compose } from 'redux'
import ffnApp from './reducers'

// Log state changes for testing
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  // After calling this, stote.getState() will return next state (?)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// For the redux dev tools chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// If we're in development, apply development middleware
let store = ''
switch (process.env.NODE_ENV) {
  case 'development':
    store = createStore(ffnApp, composeEnhancers(
      applyMiddleware(logger)
    ))
    break
  case 'production':
    // Exclude the logger in production
    store = createStore(ffnApp)
    break
  default:
    // Exclude the logger by default
    store = createStore(ffnApp)
}

export default store