import * as actionTypes from '../actionTypes'

export const loadLinks = () => ({
  type: actionTypes.LOAD_LINKS
})

export const linksLoaded = (links) => ({
  type: actionTypes.LINKS_LOADED,
  links
})

export const addLink = (link) => ({
  type: actionTypes.ADD_LINK,
  link
})
