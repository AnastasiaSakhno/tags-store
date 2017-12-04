import React from 'react'
import renderer from 'react-test-renderer'
import TagForm from '../TagForm'
import uniqId from '../../utils/uniq-id'

const linkId = uniqId()
const addTag = () => {}

it('renders correctly', () => {
  const tree = renderer
    .create(<TagForm onTagSubmit={ addTag } linkId={ linkId }/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
