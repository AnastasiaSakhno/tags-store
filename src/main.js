import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middlewares from './middlewares'
import reducers from './reducers'
import RootBox from './components/RootBox'

const store = createStore(reducers, middlewares)

ReactDOM.render(
  <Provider store={ store }>
    <RootBox/>
  </Provider>,
  document.getElementById('root')
)
