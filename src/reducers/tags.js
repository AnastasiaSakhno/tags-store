import * as actionTypes from '../actions/types'

const tags = (state = [], action) => {
  if(action.type === actionTypes.TAGS_LOADED) {
    return [...action.tags]
  }

  if(action.type === actionTypes.ADD_TAG) {
    return [
      ...state,
      { ...action.tag }
    ]
  }

  return state
}

export default tags
