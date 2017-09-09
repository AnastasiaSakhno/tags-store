import watchLinks from './links'

export default function *rootSaga() {
  yield [watchLinks()]
}
