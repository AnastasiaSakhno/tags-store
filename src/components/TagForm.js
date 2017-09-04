import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TagForm extends Component {

  static propTypes = {
    onTagSubmit: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const name = this.tagInput.value
    if(!name) {
      return
    }

    this.props.onTagSubmit({ name: name })

    this.tagInput.value = ''
  }

  render() {
    return (
      <form className="tag-form" onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Tag name" ref={ (el) => { this.tagInput = el } }/>
        <input type="submit" value="Add tag"/>
      </form>
    )
  }
}

export default TagForm
