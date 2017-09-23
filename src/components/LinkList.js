import React from 'react'
import PropTypes from 'prop-types'

import LinkBox from './LinkBox'

const LinkList = ({ data }) => {
  const linksMap = data.map((link) => (
    <LinkBox name={link.name} url={ link.url } key={ link.id } tags={ link.tags } id={ link.id } />
  ))

  return (<div className="link-list">{ linksMap }</div>)
}

LinkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      id: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          linkId: PropTypes.string
        })
      )
    })
  ).isRequired
}

export default LinkList
