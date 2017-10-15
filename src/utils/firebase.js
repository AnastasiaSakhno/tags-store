import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCwzu347BolcJ87ag2pv7SQBwzkCz57MD8',
  authDomain: 'tags-store.firebaseapp.com',
  databaseURL: 'https://tags-store.firebaseio.com',
  projectId: 'tags-store',
  storageBucket: '',
  messagingSenderId: '339559224405'
}

// TODO: separate with three files: firebase, links, tags
export const firebaseApp = firebase.initializeApp(config)

const db = firebase.database()
const ref = (tableName) => db.ref(tableName)
const linksTableName = '/links'
const tagsTableName = '/tags'

export const snapshotToArray = (snapshot) => {
  const arrayToReturn = []

  snapshot.forEach( (item) => {
    arrayToReturn.push(item.val())
  })

  return arrayToReturn
}

export const getLinks = () => ref(linksTableName).once('value')

export const saveLink = (link) => {
  const newLink = ref(linksTableName).push()
  newLink.set(link)
}

export const saveTag = (tag) => {
  ref(linksTableName).orderByChild('id').equalTo(tag.linkId).once('child_added', function(snapshot) {
    snapshot.ref.update({ tags: [...snapshot.val().tags, tag] })
  })
}

export const destroyTag = (tag) => {
  ref(linksTableName).orderByChild('id').equalTo(tag.linkId).on('child_added', function(snapshot) {
    snapshot.ref.update({ tags: snapshot.val().tags.filter( (t) => { return t.name !== tag.name }) })
  })
}

export const destroyLink = (link) => {
  ref(linksTableName).orderByChild('id').equalTo(link.id).once('child_added', function(snapshot) {
    snapshot.ref.update({ archive: true })
  })
}
