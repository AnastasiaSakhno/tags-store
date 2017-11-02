import React from 'react'
import PropTypes from 'prop-types'
import TagsContainer from './TagsContainer'
import Link from './Link'

const LinkBox = ({ link, onDestroy, addTag, removeTag }) => {
  return (
    <div className="link-box">
      <Link {...link} onDestroy={ onDestroy }/>
      <TagsContainer linkId={ link.id } tags={ link.tags } addTag={ addTag } removeTag= { removeTag }/>
    </div>
  )
}

const { object, func } = PropTypes

LinkBox.propTypes = {
  link: object,
  onDestroy: func.isRequired,
  addTag: func.isRequired,
  removeTag: func.isRequired
}

export default LinkBox
