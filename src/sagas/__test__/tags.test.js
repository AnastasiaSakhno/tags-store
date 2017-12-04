import { call, put } from 'redux-saga/effects'
import { saveTag, destroyTag } from '../../utils/firebase'
import * as actionTypes from '../../actions/types'
import actions from '../../actions'
import { addTag, removeTag } from '../tags'
import uniqId from '../../utils/uniq-id'

describe('tags saga', () => {
  describe('addTag', () => {
    const linkId = uniqId()
    const tag = {
      linkId: linkId,
      name: 'three'
    }
    const action = {
      tag: tag
    }
    const generator = addTag(action)

    it('calls saveTag', () => {
      expect(generator.next(tag).value).toEqual(call(saveTag, tag))
    })
  })

  describe('removeTag', () => {
    const linkId = uniqId()
    const tag = {
      linkId: linkId,
      name: 'three'
    }
    const action = {
      tag: tag
    }
    const generator = removeTag(action)

    it('calls destroyTag', () => {
      expect(generator.next(tag).value).toEqual(call(destroyTag, tag))
    })

    it('puts tagRemovedSuccessfully', () => {
      expect(generator.next(tag).value).toEqual(put(actions.links.tagRemovedSuccessfully(tag)))
    })
  })
})
