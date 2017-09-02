import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middlewares from './middlewares'
import reducers from './reducers'
import LinkBox from './components/LinkBox'

const store = createStore(reducers, middlewares)

ReactDOM.render(
  <Provider store={ store }>
    <LinkBox/>
  </Provider>,
  document.getElementById('root')
)
