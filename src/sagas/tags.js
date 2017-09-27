import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import { snapshotToArray, getTags, saveTag, destroyTag } from '../utils/firebase'
import * as actionTypes from '../actions/types'
import actions from '../actions'

export function* loadTags() {
  const snapshot = yield call(getTags)
  const tags = yield call(snapshotToArray, snapshot)

  yield put(actions.tags.loaded(tags))
}

export function* addTag({ tag }) {
  yield call(saveTag, tag)
}

export function* removeTag({ tag }) {
  yield call(destroyTag, tag)
  yield put(actions.tags.tagRemoved(tag))
}

export default function* watchTags() {
  yield[
    takeLatest(actionTypes.LOAD_TAGS, loadTags),
    takeEvery(actionTypes.ADD_TAG, addTag),
    takeEvery(actionTypes.REMOVE_TAG, removeTag)
  ]
}
