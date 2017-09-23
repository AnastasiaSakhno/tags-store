import watchLinks from './links'
import watchTags from './tags'

export default function *rootSaga() {
  yield [watchLinks(), watchTags()]
}
