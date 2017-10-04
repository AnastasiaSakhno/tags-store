import { createSelector } from 'reselect'

const getArchiveFilter = (state) => state.filters.archive
const getTextFilter = (state) => state.filters.text
const getLinks = (state) => state.links

export const filteredByArchive = createSelector(
  [getArchiveFilter, getLinks],
  (archiveFilter, links) => {
    return archiveFilter ? links : links.filter( (link) => !link.archive )
  }
)

export const filtered = createSelector(
  [getTextFilter, filteredByArchive],
  (text, links) => {
    const regex = new RegExp('.*' + text + '.*', 'gi')
    return links.filter( (link) => linkMatches(link, regex) )
  }
)

const linkMatches = (link, regex) => regex.test(link.name) || regex.test(link.url) || someTagMatches(link.tags, regex)

const someTagMatches = (tags, regex) => tags.some( (tag) => { return regex.test(tag.name) })
