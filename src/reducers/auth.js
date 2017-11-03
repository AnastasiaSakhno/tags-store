import * as actionTypes from '../actions/types'

const initialState = { error: null }

const auth = (state = initialState, action) => {
  switch(action.type) {
  case actionTypes.LOGIN_SUCCESS:
    return { ...state, error: null }

  case actionTypes.LOGIN_FAILED:
    return { ...state, error: action.error }

  default:
    return state
  }
}

export default auth
