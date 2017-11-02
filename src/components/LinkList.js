import React from 'react'
import PropTypes from 'prop-types'

import LinkBox from './LinkBox'

const LinkList = ({ data, onDestroy, addTag, removeTag }) => {
  const linksMap = data.map((link) => (
    <LinkBox link={ link } key={ link.id } onDestroy={ onDestroy } addTag={ addTag } removeTag= { removeTag } />
  ))

  return (
    <div className="link-list">
      <legend>Links</legend>
      { linksMap }
    </div>
  )
}

const { string, bool, arrayOf, shape, func } = PropTypes

LinkList.propTypes = {
  data: arrayOf(
    shape({
      name: string,
      url: string,
      id: string,
      archive: bool,
      tags: arrayOf(
        shape({
          name: string,
          linkId: string
        })
      )
    })
  ).isRequired,
  onDestroy: func.isRequired,
  addTag: func.isRequired,
  removeTag: func.isRequired
}

export default LinkList
