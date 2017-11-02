import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from '../utils/configureStore'
import { sessionService } from 'redux-react-session'
import App from '../components/App'
import '../main.scss'

const store = configureStore(false, window.__initialData__)

sessionService.initSessionService(store, { refreshOnCheckAuth: true, redirectPath: '/', driver: 'COOKIES' })

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
