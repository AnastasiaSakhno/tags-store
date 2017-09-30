import * as actionTypes from '../actions/types'

const initialState = { archive: false }

const filters = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE_ARCHIVE:
      return { ...state, archive: !state.archive }

    default:
      return state
  }
}

export default filters
