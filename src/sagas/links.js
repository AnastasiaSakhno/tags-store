import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import { snapshotToArray, getLinks, saveLink, destroyLink } from '../utils/firebase'
import actions from '../actions'
import * as actionTypes from '../actions/types'

export function* loadLinks() {
  const linksSnapshot = yield call(getLinks)
  const links = yield call(snapshotToArray, linksSnapshot)

  yield put(actions.links.loaded(links))
}

export function* addLink({ link }) {
  yield call(saveLink, link)
}

export function* removeLink({ link }) {
  yield call(destroyLink, link)
  yield put(actions.links.removedSuccessfully(link))
}

export default function* watchLinks() {
  yield [
    takeLatest(actionTypes.LOAD_LINKS, loadLinks),
    takeEvery(actionTypes.ADD_LINK, addLink),
    takeEvery(actionTypes.REMOVE_LINK, removeLink)
  ]
}
