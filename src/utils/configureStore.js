import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import sagas from '../sagas'
import logger from 'redux-logger'


export default function configureStore(isServer, preloadedState, context = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducers, preloadedState, compose(applyMiddleware(sagaMiddleware, logger)))
  if(!isServer)
    sagaMiddleware.run(sagas, context)
  return store
}
