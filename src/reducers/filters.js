import * as actionTypes from '../actions/types'

const initialState = { archive: false, text: '' }

const filters = (state = initialState, action) => {
  switch(action.type) {
  case actionTypes.TOGGLE_ARCHIVE:
    return { ...state, archive: !state.archive }

  case actionTypes.SEARCH_BY_TEXT:
    return { ...state, text: action.text }

  default:
    return state
  }
}

export default filters
