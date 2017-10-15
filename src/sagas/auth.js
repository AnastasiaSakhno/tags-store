import { takeEvery, put, call } from 'redux-saga/effects'
import * as actionTypes from '../actions/types'
import actions from '../actions'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { sessionService } from 'redux-react-session'
import { firebaseApp } from '../utils/firebase'
import { browserHistory } from 'react-router'

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
  sessionService.saveSession({ token: data.refreshToken })
  sessionService.saveUser(data)
  user.history.replace('/')
}

function* logout() {
  const data = yield call(reduxSagaFirebase.auth.signOut)
  sessionService.deleteSession()
  sessionService.saveUser(data)
  browserHistory.replace('/login')
}

export default function* watchAuth() {
  yield [
    takeEvery(actionTypes.LOGIN, login),
    takeEvery(actionTypes.LOGIN_SUCCESS, loginSuccess),
    takeEvery(actionTypes.LOGOUT, logout)
  ]
}
