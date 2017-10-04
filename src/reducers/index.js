import links from './links'
import filters from './filters'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  links, filters
})

export default reducers
