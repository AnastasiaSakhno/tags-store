import firebaseMiddleware from './firebase'
import { applyMiddleware } from 'redux'

export default applyMiddleware(firebaseMiddleware)
