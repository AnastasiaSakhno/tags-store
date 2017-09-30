import { createSelector } from 'reselect'

const getArchiveFilter = (state) => state.filters.archive
const getLinks = (state) => state.links

export const getFiltered = createSelector(
  [getArchiveFilter, getLinks],
  (archiveFilter, links) => {
    return archiveFilter ? links : links.filter( (link) => !link.archive )
  }
)
