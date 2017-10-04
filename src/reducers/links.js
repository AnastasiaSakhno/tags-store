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

    case actionTypes.ADD_TAG:
      return state.map((link) => {
        if (link.id === action.tag.linkId) {
          return { ...link, tags: [...link.tags, { name: action.tag.name }] }
        }
        return link
      })

    case actionTypes.TAG_REMOVED_SUCCESSFULLY:
      return state.map((link) => {
        if (link.id === action.tag.linkId) {
          return { ...link, tags: link.tags.filter( (tag) => { return tag.name !== action.tag.name } ) }
        }
        return link
      })

    default:
      return state
  }
}

export default links
