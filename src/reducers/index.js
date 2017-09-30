import links from './links'
import tags from './tags'
import filters from './filters'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  links, tags, filters
})

export default reducers
