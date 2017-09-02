import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

const LinkList = ({ data }) => {
  const linksMap = data.map((link, index) => (
    <Link url={ link.url } key={ index }/>
  ))

  return (
    <div className="link-list">
      { linksMap }
    </div>
  )
}

LinkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string
    })
  ).isRequired
}

export default LinkList
