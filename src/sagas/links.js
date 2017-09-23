import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import { snapshotToArray, getLinks, saveLink, getTagsFor, saveTags } from '../utils/firebase'
import actions from '../actions'
import * as actionTypes from '../actions/types'

export function* loadLinks() {
  const linksSnapshot = yield call(getLinks)
  const links = yield call(snapshotToArray, linksSnapshot)

  yield put(actions.links.loaded(links))
}

export function* addLink({ link }) {
  // do not store tags in links table
  yield call(saveLink, Object.assign({}, link, {
    tags: null
  }))
  yield call(saveTags, link)
}

export default function* watchLinks() {
  yield [
    takeLatest(actionTypes.LOAD_LINKS, loadLinks),
    takeEvery(actionTypes.ADD_LINK, addLink)
  ]
}
