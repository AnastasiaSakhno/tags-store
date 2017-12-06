import { put, call } from 'redux-saga/effects'
import actions from '../../actions'
import { login, loggedInSuccessfully, logout, fbSignIn, fbSignOut, deleteSession, saveSession, saveUser } from '../auth'

describe('auth saga', () => {
  const user = {
    email: 'test@gmail.com',
    password: 'password1'
  }

  describe('login', () => {
    const action = {
      user: user
    }
    const generator = login(action)

    it('signs in user', () => {
      expect(generator.next(user.email, user.password).value).toEqual(call(fbSignIn, user.email, user.password))
    })

    it('saves user session data', () => {
      const data = {}
      expect(generator.next(data).value).toEqual(put(actions.auth.loggedInSuccessfully(data)))
    })
  })

  describe('loggedInSuccessfully', () => {
    const data = { refreshToken: 'refreshToken' }
    const action = { data: data }
    const sessionData = { token: data.refreshToken }
    const generator = loggedInSuccessfully(action)

    it('saves token in user session', () => {
      expect(generator.next(sessionData).value).toEqual(call(saveSession, sessionData))
    })

    it('saves users data in session', () => {
      expect(generator.next(data).value).toEqual(call(saveUser, data))
    })
  })

  describe('logout', () => {
    const action = {}
    const generator = logout(action)

    it('logs out user from firebase', () => {
      expect(generator.next().value).toEqual(call(fbSignOut))
    })

    it('deletes user session', () => {
      expect(generator.next().value).toEqual(call(deleteSession))
    })
  })
})
