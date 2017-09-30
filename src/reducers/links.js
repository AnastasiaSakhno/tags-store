import * as actionTypes from '../actions/types'

const links = (state = [], action) => {
  switch(action.type) {
    case actionTypes.LINKS_LOADED:
      return [...action.links]

    case actionTypes.ADD_LINK:
      return [
        ...state,
        action.link
      ]

    case actionTypes.LINK_REMOVED_SUCCESSFULLY:
      return state.filter( (link) => { return link.id !== action.link.id } )

    default:
      return state
  }
}

export default links
