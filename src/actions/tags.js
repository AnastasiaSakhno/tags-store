import * as actionTypes from '../actionTypes'

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
