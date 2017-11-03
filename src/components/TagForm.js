import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TagForm extends Component {
  static propTypes = {
    onTagSubmit: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const name = this.tagNameInput.value
    if(!name) {
      return
    }

    this.props.onTagSubmit({ name: name, linkId: this.props.linkId })

    this.tagNameInput.value = ''
  }

  render() {
    return (
      <form className='tag-form' onSubmit={ this.handleSubmit }>
        <input type='text' placeholder='Tag name' ref={ (el) => { this.tagNameInput = el } }/>
        <input type='submit' value='Add tag'/>
      </form>
    )
  }
}

TagForm.propTypes = {
  linkId: PropTypes.string.isRequired
}

export default TagForm
