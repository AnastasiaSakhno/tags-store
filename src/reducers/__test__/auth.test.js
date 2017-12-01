import * as actionTypes from '../../actions/types'
import auth, { initialState } from '../auth'

describe('auth reducer', () => {
  it('has initial state', () => {
    const state = auth(initialState, {})
    expect(state.error).toEqual(null)
  })

  it('logins successfully', () => {
    const state = auth(initialState, {
      type: actionTypes.LOGIN_SUCCESS
    })
    expect(state.error).toEqual(null)
  })

  it('logins unsuccessfully', () => {
    const state = auth(initialState, {
      type: actionTypes.LOGIN_FAILED,
      error: 'some error happend'
    })
    expect(state.error).toEqual('some error happend')
  })
})
