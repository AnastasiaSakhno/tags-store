import { takeEvery, put, call } from 'redux-saga/effects'
import * as actionTypes from '../actions/types'
import actions from '../actions'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { sessionService } from 'redux-react-session'
import { firebaseApp } from '../utils/firebase'

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)

function* login({ user }) {
  let data
  try {
    data = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, user.email, user.password)
    yield put(actions.auth.loggedInSuccessfully(data))
  } catch(error) {
    yield put(actions.auth.loginFailed(error))
  }
}

function* loggedInSuccessfully({ data }) {
  yield call(sessionService.saveSession, { token: data.refreshToken })
  yield call(sessionService.saveUser, data)
}

function* logout() {
  yield call(reduxSagaFirebase.auth.signOut)
  yield call(sessionService.deleteSession)
}

export default function* watchAuth() {
  yield [
    takeEvery(actionTypes.LOGIN, login),
    takeEvery(actionTypes.LOGIN_SUCCESS, loggedInSuccessfully),
    takeEvery(actionTypes.LOGOUT, logout)
  ]
}
