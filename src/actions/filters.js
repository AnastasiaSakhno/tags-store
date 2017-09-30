import * as actionTypes from './types'

export const toggleArchive = () => ({
  type: actionTypes.TOGGLE_ARCHIVE
})

export const searchByText = (text) => ({
  type: actionTypes.SEARCH_BY_TEXT,
  text
})
