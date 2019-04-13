import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

export default function configureStore (initialState = {}, rootReducer) {
  const middleware = [thunk]

  if (process.env.NODE_ENV !== 'production' && !process.env.REACT_APP_SILENT) {
    middleware.push(
      createLogger({
        collapsed: true,
        logger: console,
        level: {
          prevState: 'debug',
          action: 'debug',
          nextState: 'debug',
          error: 'error'
        },
        colors: {
          title: () => '#8025B5'
        }
      })
    )
  }

  const enhancers = [applyMiddleware(...middleware)]

  const store = createStore(rootReducer, initialState, compose(...enhancers))

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
