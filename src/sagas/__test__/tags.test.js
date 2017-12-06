import { call, put } from 'redux-saga/effects'
import { saveTag, destroyTag } from '../../utils/firebase'
import actions from '../../actions'
import { addTag, removeTag } from '../tags'
import uniqId from '../../utils/uniq-id'

describe('tags saga', () => {
  const linkId = uniqId()
  const tag = {
    linkId: linkId,
    name: 'three'
  }
  const action = {
    tag: tag
  }

  describe('addTag', () => {
    const generator = addTag(action)

    it('saves tag', () => {
      expect(generator.next(tag).value).toEqual(call(saveTag, tag))
    })
  })

  describe('removeTag', () => {
    const generator = removeTag(action)

    it('destroys rag', () => {
      expect(generator.next(tag).value).toEqual(call(destroyTag, tag))
    })

    it('removes tag from the store', () => {
      expect(generator.next(tag).value).toEqual(put(actions.links.tagRemovedSuccessfully(tag)))
    })
  })
})
