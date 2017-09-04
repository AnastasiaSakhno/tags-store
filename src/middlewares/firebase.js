import firebase from 'firebase'
import * as actionTypes from '../actionTypes'
import actions from '../actions'

const config = {
  apiKey: 'AIzaSyCwzu347BolcJ87ag2pv7SQBwzkCz57MD8',
  authDomain: 'tags-store.firebaseapp.com',
  databaseURL: 'https://tags-store.firebaseio.com',
  projectId: 'tags-store',
  storageBucket: '',
  messagingSenderId: '339559224405'
}
firebase.initializeApp(config)

const db = firebase.database()
const linksQueueName = '/links'
const tagssQueueName = '/tagss'

const snapshotToArray = (snapshot) => {
  const arrayToReturn = []

  snapshot.forEach((item) => {
    arrayToReturn.push(item.val())
  })

  return arrayToReturn
}

const firebaseMiddleware = ({ dispatch }) => next => action => {
  // links
  if(action.type === actionTypes.LOAD_LINKS) {
    db.ref(linksQueueName).once('value', (snapshot) => {
      dispatchLoadedAction(dispatch, actions.links.loaded, snapshot)
    })
  }

  if(action.type === actionTypes.ADD_LINK) {
    const link = db.ref(linksQueueName).push()
    link.set(action.link)
  }

  // tags
  if(action.type === actionTypes.LOAD_TAGS) {
    db.ref(tagssQueueName).once('value', (snapshot) => {
      dispatchLoadedAction(dispatch, actions.tags.loaded, snapshot)
    })
  }

  if(action.type === actionTypes.ADD_TAG) {
    const tag = db.ref(tagssQueueName).push()
    tag.set(action.tag)
  }

  next(action)
}

const dispatchLoadedAction = (dispatch, action, snapshot) => {
  const linksInDb = snapshotToArray(snapshot) || []
  dispatch(action(linksInDb))
}

export default firebaseMiddleware
