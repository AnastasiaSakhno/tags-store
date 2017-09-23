import * as actionTypes from './types'

export const load = () => ({
  type: actionTypes.LOAD_TAGS
})

export const loaded = (tags) => ({
  type: actionTypes.TAGS_LOADED,
  tags
})

export const add = (tag) => ({
  type: actionTypes.ADD_TAG,
  tag
})

export const remove = (tag) => ({
  type: actionTypes.REMOVE_TAG,
  tag
})
