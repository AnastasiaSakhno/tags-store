import links from './links'
import tags from './tags'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  links, tags
})

export default reducers
