import * as actionTypes from '../actions/types'

const tags = (state = [], action) => {
  switch(action.type) {
    case actionTypes.TAGS_LOADED:
      return [...action.tags]

    case actionTypes.ADD_TAG:
      return [
        ...state,
        { ...action.tag }
      ]

    default:
      return state
  }
}

export default tags
