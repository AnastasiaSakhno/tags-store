import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import reducers from './reducers'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { sessionService } from 'redux-react-session'
import createSagaMiddleware from 'redux-saga'
import App from './components/App'
import sagas from './sagas'
import './main.scss'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware, logger)))

sessionService.initSessionService(store)

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
