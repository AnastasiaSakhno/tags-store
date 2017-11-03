import watchLinks from './links'
import watchTags from './tags'
import watchAuth from './auth'

export default function* rootSaga() {
  yield [
    watchLinks(),
    watchTags(),
    watchAuth()
  ]
}
