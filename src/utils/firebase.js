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

export const initializeFirebase = () => firebase.initializeApp(config)

const db = () => firebase.database()
const ref = (tableName) => db().ref(tableName)
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

export const getTags = () => ref(tagsTableName).once('value')

export const getTagsFor = (linkId) => {
  return ref(tagsTableName).orderByChild('linkId').equalTo(linkId).once('value')
}

export const saveLink = (link) => {
  const newLink = ref(linksTableName).push()
  newLink.set(link)
}

export const saveTags = (link) => {
  link.tags.forEach( (tag) => {
    saveTag(tag)
  })
}

export const saveTag = (tag) => {
  const newTag = ref(tagsTableName).push()
  newTag.set(tag)
}

export const destroyTag = (tag) => {
  ref(tagsTableName).orderByChild('linkId').equalTo(tag.linkId).on('child_added', function(snapshot) {
    if(snapshot.val().name === tag.name) {
      ref(tagsTableName).child(snapshot.key).remove()
      return
    }
  })
}
