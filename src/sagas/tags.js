import { takeEvery, call, put } from 'redux-saga/effects'
import { saveTag, destroyTag } from '../utils/firebase'
import * as actionTypes from '../actions/types'
import actions from '../actions'

export function* addTag({ tag }) {
  yield call(saveTag, tag)
}

export function* removeTag({ tag }) {
  yield call(destroyTag, tag)
  yield put(actions.links.tagRemovedSuccessfully(tag))
}

export default function* watchTags() {
  yield[
    takeEvery(actionTypes.ADD_TAG, addTag),
    takeEvery(actionTypes.REMOVE_TAG, removeTag)
  ]
}
