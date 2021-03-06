import React from 'react'
import PropTypes from 'prop-types'

import LinkBox from './LinkBox'

const LinkList = ({ data, onDestroy, addTag, removeTag }) => {
  const linksMap = data.map((link) => (
    <LinkBox name={link.name} url={ link.url } key={ link.id } tags={ link.tags } id={ link.id } onDestroy={ onDestroy } addTag={ addTag } removeTag= { removeTag } />
  ))

  return (
    <div className="link-list">
      <legend>Links</legend>
      { linksMap }
    </div>
  )
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
  ).isRequired,
  onDestroy: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired
}

export default LinkList
