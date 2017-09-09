import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCwzu347BolcJ87ag2pv7SQBwzkCz57MD8',
  authDomain: 'tags-store.firebaseapp.com',
  databaseURL: 'https://tags-store.firebaseio.com',
  projectId: 'tags-store',
  storageBucket: '',
  messagingSenderId: '339559224405'
}

export const initializeFirebase = () => firebase.initializeApp(config)

const db = () => firebase.database()
const linksQueueName = '/links'
const tagsQueueName = '/tags'

export const snapshotToArray = (snapshot) => {
  const arrayToReturn = []

  snapshot.forEach( (item) => {
    arrayToReturn.push(item.val())
  })

  return arrayToReturn
}

export const getLinks = () => db().ref(linksQueueName).once('value')

export const getTags = (linkId) => {
  return db().ref(tagsQueueName).orderByChild('linkId').equalTo(linkId).once('value')
}

export const saveLink = (link) => {
  const newLink = db().ref(linksQueueName).push()
  newLink.set(link)
}

export const saveTags = (link) => {
  link.tags.forEach( (tag) => {
    const newTag = db().ref(tagsQueueName).push()
    newTag.set(tag)
  })
}
