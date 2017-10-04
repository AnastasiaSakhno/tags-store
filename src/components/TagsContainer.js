import React from 'react'
import PropTypes from 'prop-types'
import TagList from './TagList'
import TagForm from './TagForm'


const TagsContainer = ({ linkId, tags, addTag, removeTag }) => {
  return (
    <div className="tags-box">
      <TagForm onTagSubmit={ addTag } linkId={ linkId }/>
      <TagList linkId={ linkId } tags={ tags } onDestroy={ removeTag }/>
    </div>
  )
}

TagsContainer.propTypes = {
  linkId: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired
}

export default TagsContainer
