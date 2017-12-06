import { put, call } from 'redux-saga/effects'
import { snapshotToArray, getLinks, saveLink, destroyLink } from '../../utils/firebase'
import { loadLinks, addLink, removeLink } from '../links'
import actions from '../../actions'
import uniqId from '../../utils/uniq-id'


const testLink = () => {
  const linkId = uniqId()
  return {
    id: linkId,
    name: 'test link',
    url: 'https://test.link.ua',
    tags: [
      { linkId: linkId, name: 'one' },
      { linkId: linkId, name: 'two' }
    ],
    archive: false
  }
}

const firstLink = testLink()
const linksSnapshot = [{ val: () => (
  firstLink
)}]

describe('links saga', () => {
  describe('loadLinks', () => {
    const action = {}
    const generator = loadLinks(action)

    it('gets links', () => {
      expect(generator.next().value).toEqual(call(getLinks))
    })

    it('create links array', () => {
      expect(generator.next(linksSnapshot).value).toEqual(call(snapshotToArray, linksSnapshot))
    })

    it('saves links in the store', () => {
      const links = snapshotToArray(linksSnapshot)
      expect(generator.next(links).value).toEqual(put(actions.links.loaded(links)))
    })
  })

  describe('addLink', () => {
    const link = testLink()
    const action = {
      link: link
    }
    const generator = addLink(action)

    it('saves link', () => {
      expect(generator.next(link).value).toEqual(call(saveLink, link))
    })
  })

  describe('removeLink', () => {
    const action = {
      link: firstLink
    }
    const generator = removeLink(action)

    it('destroys link', () => {
      expect(generator.next(firstLink).value).toEqual(call(destroyLink, firstLink))
    })

    it('removes link from the store', () => {
      expect(generator.next(firstLink).value).toEqual(put(actions.links.removedSuccessfully(firstLink)))
    })
  })
})
