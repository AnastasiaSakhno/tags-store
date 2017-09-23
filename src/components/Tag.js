import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from './IconButton'

class Tag extends Component {

  static propTypes = {
    onTagDestroy: PropTypes.func.isRequired
  }

  handleDestroy = (e) => {
    e.preventDefault()
    this.props.onTagDestroy({ linkId: this.props.linkId, name: this.props.name })
  }

  render() {
    return (
      <span className="tag">
        { this.props.name }
        <IconButton icon={ 'fa-remove ' } onSubmit={ this.handleDestroy } />
      </span>
    )
  }
}

Tag.propTypes = {
  linkId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Tag
