import watchLinks from './links'
import watchTags from './tags'
import watchAuth from './auth'

export default function *rootSaga(context) {
  yield [
    watchLinks(context),
    watchTags(context),
    watchAuth(context)
  ]
}
