import { takeEvery, put, call } from 'redux-saga/effects'
import * as actionTypes from '../actions/types'
import actions from '../actions'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { sessionService } from 'redux-react-session'
import { firebaseApp } from '../utils/firebase'

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)
export const fbSignIn = reduxSagaFirebase.auth.signInWithEmailAndPassword
export const fbSignOut = reduxSagaFirebase.auth.signOut
export const deleteSession = sessionService.deleteSession
export const saveSession = sessionService.saveSession
export const saveUser = sessionService.saveUser

function* login({ user }) {
export function* login({ user }) {
  let data
  try {
    data = yield call(fbSignIn, user.email, user.password)
    yield put(actions.auth.loggedInSuccessfully(data))
  } catch(error) {
    yield put(actions.auth.loginFailed(error))
  }
}

export function* loggedInSuccessfully({ data }) {
  yield call(saveSession, { token: data.refreshToken })
  yield call(saveUser, data)
}

export function* logout() {
  yield call(fbSignOut)
  yield call(deleteSession)
}

export default function* watchAuth() {
  yield [
    takeEvery(actionTypes.LOGIN, login),
    takeEvery(actionTypes.LOGIN_SUCCESS, loggedInSuccessfully),
    takeEvery(actionTypes.LOGOUT, logout)
  ]
}
