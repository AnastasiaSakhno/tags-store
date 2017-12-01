import * as actionTypes from '../../actions/types'
import filters, { initialState } from '../filters'

describe('filters reducer', () => {
  it('has initial state', () => {
    const state = filters(initialState, {})
    expect(state.archive).toEqual(false)
    expect(state.text).toEqual('')
  })

  it('toggles archive', () => {
    let state = filters(initialState, {
      type: actionTypes.TOGGLE_ARCHIVE
    })
    expect(state.archive).toEqual(true)

    state = filters(state, {
      type: actionTypes.TOGGLE_ARCHIVE
    })
    expect(state.archive).toEqual(false)
  })

  it('searches by test', () => {
    const state = filters(initialState, {
      type: actionTypes.SEARCH_BY_TEXT,
      text: 'test'
    })
    expect(state.text).toEqual('test')
  })
})
