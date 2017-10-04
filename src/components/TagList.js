import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

const TagList = ({ linkId, tags, onDestroy }) => {
  const toRender = tags.map( (tag, index) => (
    <Tag name={ tag.name } linkId= { linkId } key={ linkId + index } onDestroy={ onDestroy }/>
  ))

  return (<div className="tag-list">{ toRender }</div>)
}

TagList.propTypes = {
  linkId: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ).isRequired,
  onDestroy: PropTypes.func
}

export default TagList
