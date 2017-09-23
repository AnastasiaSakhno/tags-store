import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ id, name, url }) => {

  return (
    <div className="link">
      Name: { name }, URL: { url }
    </div>
  )
}

Link.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default Link
