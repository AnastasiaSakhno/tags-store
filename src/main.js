import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { initializeFirebase } from './utils/firebase'
import sagas from './sagas'
import reducers from './reducers'
import RootBox from './components/RootBox'

initializeFirebase()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={ store }>
    <RootBox/>
  </Provider>,
  document.getElementById('root')
)
