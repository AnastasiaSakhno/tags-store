import { createSelector } from 'reselect'

const getState = (state) => state

export const filtered = createSelector(
  getState,
  (state) => {
    const { links, tags, filters } = state
    const { text, archive } = filters
    let filteredLinks = filterByArchive(links, archive)
    return filterByText(filteredLinks, tags, text)
  }
)


const matches = (entity, regex) => regex.test(entity.name) || regex.test(entity.url)

const filterByArchive = (links, archive) => archive ? links : links.filter( (link) => !link.archive )

const filterByText = (links, tags, text) => {
  const regex = new RegExp('.*' + text + '.*', 'gi')
  const linkIdsByTags = tags.filter( (tag) => matches(tag, regex) ).map( (tag) => tag.linkId )
  return links.filter( (link) => matches(link, regex) || linkIdsByTags.includes(link.id) )
}
