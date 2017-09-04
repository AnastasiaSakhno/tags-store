import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ name }) => {
  return (<div className="tag">{ name }</div>)
}

Tag.propTypes = {
  name: PropTypes.string.isRequired
}

export default Tag
