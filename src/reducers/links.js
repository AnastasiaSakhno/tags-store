import * as actionTypes from '../actions/types'

const links = (state = [], action) => {
  if(action.type === actionTypes.LINKS_LOADED) {
    return [...action.links]
  }

  if(action.type === actionTypes.ADD_LINK) {
    return [
      ...state,
      action.link
    ]
  }

  return state
}

export default links
