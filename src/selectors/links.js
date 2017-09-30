import { createSelector } from 'reselect'

const getArchiveFilter = (state) => state.filters.archive
const getLinks = (state) => state.links
const getTextFilter = (state) => state.filters.text

export const filteredByArchive = createSelector(
  [getArchiveFilter, getLinks],
  (archiveFilter, links) => {
    return archiveFilter ? links : links.filter( (link) => !link.archive )
  }
)

export const getFiltered = createSelector(
  [getTextFilter, filteredByArchive],
  (text, links) => {
    const regex = new RegExp('.*' + text + '.*', 'gi')
    return links.filter( (link) => matches(link, regex) )
  }
)

const matches = (link, regex) => {
  return regex.test(link.name) || regex.test(link.url)
}
