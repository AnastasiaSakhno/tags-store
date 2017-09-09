import { takeLatest, takeEvery, put, call, all } from 'redux-saga/effects'
import { snapshotToArray, getLinks, saveLink, getTags, saveTags } from '../utils/firebase'
import actions from '../actions'
import * as actionTypes from '../actions/types'

export function *loadLinks() {
  const linksSnapshot = yield call(getLinks)
  const links = yield call(snapshotToArray, linksSnapshot)

  yield put(actions.links.loaded(links))
}

export function *addLink({ link }) {
  yield call(saveLink, link)
  yield call(saveTags, link)
}

export default function *watchLinks() {
  yield [
    takeLatest(actionTypes.LOAD_LINKS, loadLinks),
    takeEvery(actionTypes.ADD_LINK, addLink)
  ]
}
