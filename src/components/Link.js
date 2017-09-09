import React from 'react'
import PropTypes from 'prop-types'
import TagList from './TagList'

const Link = ({ id, name, url, tags }) => {
  return (
    <div className="link">
      Name: { name }, URL: { url }
      <TagList data={ tags }/>
    </div>
  )
}

Link.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      linkId: PropTypes.string,
      name: PropTypes.string
    })
  )
}

export default Link
