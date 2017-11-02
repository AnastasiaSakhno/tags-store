import express from 'express'
import cors from 'cors'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import serialize from 'serialize-javascript'
import configureStore from '../utils/configureStore'
import App from '../components/App'
import sourceMapSupport from 'source-map-support'
import { sessionService } from 'redux-react-session'

if (process.env.NODE_ENV === 'development') {
  sourceMapSupport.install()
}


const app = express()

app.use(cors())
app.use(express.static('public'))


app.use('*', (req, res, next) => {
  const store = configureStore(true)

  const promises = [
    Promise.resolve(sessionService.initServerSession(store, req)),
    Promise.resolve(sessionService.checkAuth())
  ]

  Promise.all(promises)
    .then(() => {
      const context = {}
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      )

      const initialData = store.getState()

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Links and tags store</title>
            <link rel="shortcut icon" href="data:image/x-icon," type="image/x-icon">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="/css/main.css">
            <script src="/bundle.js" defer></script>
            <script>window.__initialData__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `)
    })
    .catch(next)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening')
})
