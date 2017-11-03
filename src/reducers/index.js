import links from './links'
import filters from './filters'
import auth from './auth'
import { sessionReducer } from 'redux-react-session'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  links, filters, auth, session: sessionReducer
})

export default reducers
