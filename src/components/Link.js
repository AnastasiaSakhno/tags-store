import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ url }) => {
  return (<div className="link">{ url }</div>)
}

Link.propTypes = {
  link: PropTypes.string
}

export default Link
