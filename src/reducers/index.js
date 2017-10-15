import links from './links'
import filters from './filters'
import { sessionReducer } from 'redux-react-session'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  links, filters, session: sessionReducer
})

export default reducers
