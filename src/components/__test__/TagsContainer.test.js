import React from 'react'
import renderer from 'react-test-renderer'
import TagsContainer from '../TagsContainer'
import uniqId from '../../utils/uniq-id'

const linkId = uniqId()
const link = {
  id: linkId,
  name: 'test link',
  url: 'https://test.link.ua',
  tags: [
    { linkId: linkId, name: 'one' },
    { linkId: linkId, name: 'two' }
  ],
  archive: false
}
const addTag = () => {}
const removeTag = () => {}

it('renders correctly', () => {
  const tree = renderer
    .create(<TagsContainer linkId={ link.id } tags={ link.tags } addTag={ addTag } removeTag= { removeTag }/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
