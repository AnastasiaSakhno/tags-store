import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ linkId, name }) => {
  return (<div className="tag">{ name }</div>)
}

Tag.propTypes = {
  linkId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Tag
