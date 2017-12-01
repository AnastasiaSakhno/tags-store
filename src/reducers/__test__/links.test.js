import * as actionTypes from '../../actions/types'
import links, { initialState } from '../links'
import uniqId from '../../utils/uniq-id'

const testLink = {
  id: uniqId(),
  name: 'test link',
  url: 'https://test.link.ua',
  tags: [{ name: 'one' }, { name: 'two' }],
  archive: false
}

describe('links reducer', () => {
  it('has initial state', () => {
    const state = links(initialState, {})
    expect(state).toEqual([])
  })

  it('loads links', () => {
    const state = links(initialState, {
      type: actionTypes.LINKS_LOADED,
      links: [testLink]
    })
    expect(state).toEqual([testLink])
  })

  it('adds link', () => {
    const state = links(initialState, {
      type: actionTypes.ADD_LINK,
      link: testLink
    })
    expect(state).toEqual([testLink])
  })

  it('removes link', () => {
    const state = links([...initialState, testLink], {
      type: actionTypes.LINK_REMOVED_SUCCESSFULLY,
      link: testLink
    })
    expect(state).toEqual([{ ...testLink, archive: true }])
  })

  it('adds tag', () => {
    const state = links([...initialState, testLink], {
      type: actionTypes.ADD_TAG,
      tag: {
        linkId: testLink.id,
        name: 'three'
      }
    })
    expect(state).toEqual([{ ...testLink, tags: [{ name: 'one' }, { name: 'two' }, { name: 'three' }] }])
  })

  it('removes tag', () => {
    const state = links([...initialState, testLink], {
      type: actionTypes.TAG_REMOVED_SUCCESSFULLY,
      tag: {
        linkId: testLink.id,
        name: 'two'
      }
    })
    expect(state).toEqual([{ ...testLink, tags: [{ name: 'one' }] }])
  })
})
