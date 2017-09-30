import * as actionTypes from './types'

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

export const remove = (link) => ({
  type: actionTypes.REMOVE_LINK,
  link
})

export const removedSuccessfully = (link) => ({
  type: actionTypes.LINK_REMOVED_SUCCESSFULLY,
  link
})
