import * as actionTypes from '../actions/types'

const tags = (state = [], action) => {
  switch(action.type) {
    case actionTypes.TAGS_LOADED:
      return [...action.tags]

    case actionTypes.ADD_TAG:
      return [
        ...state,
        action.tag
      ]

    case actionTypes.TAG_REMOVED_SUCCESSFULLY:
      return state.filter( (tag) => { return !(tag.linkId === action.tag.linkId && tag.name === action.tag.name) } )

    default:
      return state
  }
}

export default tags
