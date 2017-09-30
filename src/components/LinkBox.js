import React from 'react'
import PropTypes from 'prop-types'
import TagsContainer from './TagsContainer'
import Link from './Link'

const LinkBox = ({ id, name, url, tags, onDestroy }) => {
  return (
    <div className="link-box">
      <Link id={ id } name={ name } url={ url } onDestroy={ onDestroy }/>
      <TagsContainer linkId={ id }/>
    </div>
  )
}

LinkBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      linkId: PropTypes.string,
      name: PropTypes.string
    })
  ),
  onDestroy: PropTypes.func
}

export default LinkBox
