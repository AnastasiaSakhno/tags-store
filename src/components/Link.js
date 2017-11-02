import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from './IconButton'

class Link extends Component {

  static propTypes = {
    onDestroy: PropTypes.func.isRequired
  }

  handleDestroy = (e) => {
    e.preventDefault()
    this.props.onDestroy({ id: this.props.id })
  }

  render() {
    let icon = <IconButton icon={ 'fa-remove ' } onSubmit={ this.handleDestroy } />
    if(this.props.archive) {
      icon = ''
    }

    return (
      <div className="link">
        Name: { this.props.name }, URL: { this.props.url }
        { icon }
      </div>
    )
  }
}

const { string, bool } = PropTypes

Link.propTypes = {
  id: string,
  name: string,
  url: string.isRequired,
  archive: bool.isRequired
}

export default Link
