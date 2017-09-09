import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

const TagList = ({ data }) => {
  const toRender = data.map( (tag, index) => (
    <Tag name={ tag.name } linkId= { tag.linkId } key={ index }/>
  ))

  return (<div className="tag-list">{ toRender }</div>)
}

TagList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      linkId: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired
}

export default TagList
