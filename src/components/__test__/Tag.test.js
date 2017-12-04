import React from 'react'
import renderer from 'react-test-renderer'
import Tag from '../Tag'
import uniqId from '../../utils/uniq-id'

const linkId = uniqId()
const tag = {
  linkId: linkId,
  name: 'tag'
}
const onDestroy = () => {}

it('renders correctly', () => {
  const tree = renderer
    .create(<Tag name={ tag.name } linkId= { linkId } key={ linkId } onDestroy={ onDestroy } />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
