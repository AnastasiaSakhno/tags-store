import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import reducers from './reducers'
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, browserHistory } from 'react-router'
import { sessionService } from 'redux-react-session'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import routes from './routes'
import './main.scss'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware, logger)))

sessionService.initSessionService(store, { driver: 'COOKIES' })

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('root')
)
