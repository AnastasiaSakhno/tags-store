import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

const TagList = ({ tags, onTagDestroy }) => {
  const toRender = tags.map( (tag, index) => (
    <Tag name={ tag.name } linkId= { tag.linkId } key={ tag.linkId + index } onTagDestroy={ onTagDestroy }/>
  ))

  return (<div className="tag-list">{ toRender }</div>)
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      linkId: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  onTagDestroy: PropTypes.func
}

export default TagList
