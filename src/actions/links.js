import * as actionTypes from '../actionTypes'

export const load = () => ({
  type: actionTypes.LOAD_LINKS
})

export const loaded = (links) => ({
  type: actionTypes.LINKS_LOADED,
  links
})

export const add = (link) => ({
  type: actionTypes.ADD_LINK,
  link
})
