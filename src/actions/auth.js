import * as actionTypes from './types'

export const login = (user) => ({
  type: actionTypes.LOGIN,
  user
})

export const loggedInSuccessfully = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  data
})

export const loginFailed = (error) => ({
  type: actionTypes.LOGIN_FAILED,
  error
})

export const logout = () => ({
  type: actionTypes.LOGOUT
})
