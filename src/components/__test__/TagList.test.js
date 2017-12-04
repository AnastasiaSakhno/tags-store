import React from 'react'
import renderer from 'react-test-renderer'
import TagList from '../TagList'
import uniqId from '../../utils/uniq-id'

const linkId = uniqId()
const one = {
  linkId: linkId,
  name: 'one'
}
const two = {
  linkId: linkId,
  name: 'two'
}
const tags = [one, two]
const removeTag = () => {}

it('renders correctly', () => {
  const tree = renderer
    .create(<TagList linkId={ linkId } tags={ tags } onDestroy={ removeTag }/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
