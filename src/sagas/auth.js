import { takeEvery, put, call } from 'redux-saga/effects'
import * as actionTypes from '../actions/types'
import actions from '../actions'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { sessionService } from 'redux-react-session'
import { firebaseApp } from '../utils/firebase'

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)

function* login({ user }) {
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, user.email, user.password)
    yield put(actions.auth.loginSuccess(user, data))
  } catch(error) {
    // TODO new action
    console.log(error)
  }
}

function* loginSuccess({ user, data }) {
  yield call(sessionService.saveSession, { token: data.refreshToken })
  yield call(sessionService.saveUser, data)
}

function* logout() {
  const data = yield call(reduxSagaFirebase.auth.signOut)
  yield call(sessionService.deleteSession)
}

export default function* watchAuth(context) {
  yield [
    takeEvery(actionTypes.LOGIN, login),
    takeEvery(actionTypes.LOGIN_SUCCESS, loginSuccess),
    takeEvery(actionTypes.LOGOUT, logout)
  ]
}
