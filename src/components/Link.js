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
    return (
      <div className="link">
        Name: { this.props.name }, URL: { this.props.url }
        <IconButton icon={ 'fa-remove ' } onSubmit={ this.handleDestroy } />
      </div>
    )
  }
}

Link.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default Link
